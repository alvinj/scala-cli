package scala.cli.commands

import caseapp._
import coursier.env.{EnvironmentUpdate, ProfileUpdater}

import scala.io.StdIn.readLine
import scala.util.{Properties, Try}

object InstallHome extends ScalaCommand[InstallHomeOptions] {
  override def hidden: Boolean = true

  private def logEqual(version: String) = {
    System.err.println(
      s"Scala-cli $version is already installed and up-to-date."
    )
    sys.exit(0)
  }

  private def logUpdate(env: Boolean, newVersion: String, oldVersion: String) =
    if (!env) println(
      s"""scala-cli $oldVersion is already installed and out-of-date.
         |scala-cli will be updated to version $newVersion
         |""".stripMargin
    )

  private def logDowngrade(env: Boolean, newVersion: String, oldVersion: String) =
    if (!env && coursier.paths.Util.useAnsiOutput()) {
      println(s"scala-cli $oldVersion is already installed and up-to-date.")
      println(s"Do you want to downgrade scala-cli to version $newVersion [Y/n]")
      val response = readLine()
      if (response != "Y") {
        System.err.println("Abort")
        sys.exit(1)
      }
    }
    else {
      System.err.println(
        s"Error: scala-cli is already installed $oldVersion and up-to-date. Downgrade to $newVersion pass -f or --force."
      )
      sys.exit(1)
    }

  def run(options: InstallHomeOptions, args: RemainingArgs): Unit = {

    val binDirPath =
      options.binDirPath.getOrElse(scala.build.Directories.default().binRepoDir / "scala-cli")
    val newScalaCliBinPath = os.Path(options.scalaCliBinaryPath, os.pwd)

    val newVersion: String =
      os.proc(newScalaCliBinPath, "version").call(cwd = os.pwd).out.text().trim

    // Backward compatibility - previous versions not have the `--version` parameter
    val oldVersion: String = Try {
      os.proc(binDirPath / options.binaryName, "version").call(cwd = os.pwd).out.text().trim
    }.toOption.getOrElse("0.0.0")

    if (os.exists(binDirPath))
      if (options.force) () // skip logging
      else if (newVersion == oldVersion) logEqual(newVersion)
      else if (CommandUtils.isOutOfDateVersion(newVersion, oldVersion))
        logUpdate(options.env, newVersion, oldVersion)
      else logDowngrade(options.env, newVersion, oldVersion)

    os.remove.all(binDirPath)

    os.copy(
      from = newScalaCliBinPath,
      to = binDirPath / options.binaryName,
      createFolders = true
    )
    if (!Properties.isWin)
      os.perms.set(binDirPath / options.binaryName, os.PermSet.fromString("rwxr-xr-x"))

    if (options.env)
      println(s"""export PATH="$binDirPath:$$PATH"""")
    else {

      val update = EnvironmentUpdate(Nil, Seq("PATH" -> binDirPath.toString()))

      val didUpdate =
        if (Properties.isWin) {
          val updater = CustomWindowsEnvVarUpdater().withUseJni(Some(coursier.paths.Util.useJni()))
          updater.applyUpdate(update)
        }
        else {
          val updater = ProfileUpdater()
          updater.applyUpdate(update)
        }

      println(s"Successfully installed scala-cli $newVersion")

      if (didUpdate) {
        if (Properties.isLinux)
          println(
            s"""|Profile file(s) updated.
                |To run scala-cli, log out and log back in, or run 'source ~/.profile'""".stripMargin
          )
        if (Properties.isMac)
          println("To run scala-cli, open new terminal or run 'source ~/.profile'")
      }

    }
  }
}
