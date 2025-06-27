const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const nodeVersion = core.getInput('node-version');
    const environment = core.getInput('environment');
    
    console.log(`Setting up Node.js ${nodeVersion} for ${environment}`);
    
    console.log('Installing dependencies...');
    await exec.exec('npm', ['install']);
    
    console.log('Starting Hello World app...');
    await exec.exec('npm', ['start']);
    
    core.setOutput('build-status', 'success');
    console.log('Hello World app started successfully!');
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();