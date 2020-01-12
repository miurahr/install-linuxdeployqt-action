import * as process from "process";
import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function run() {
  try {
    const name = "linuxdeployqt-continuous-x86_64.AppImage";
    const targetdir = (core.getInput("dir") || process.env.RUNNER_WORKSPACE) + "/bin";
    const executable = targetdir + '/' + name;
    const target = "https://github.com/probonopd/linuxdeployqt/releases/download/continuous/" + name;

    await exec.exec(`mkdir -p ${targetdir}`);
    await exec.exec(`wget -c -nv ${target} -O ${executable}`);
    await exec.exec(`chmod +x ${executable}`);

    core.addPath(targetdir);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
