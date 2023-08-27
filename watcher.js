function run() {
  const projectName = getProjectName()

  const childProcess = spawnChildProcess(projectName)

  watchProjectFolder(projectName, childProcess)

}

function getProjectName() {
  const [_execPath, _scriptPath, projectName] = process.argv

  if (!projectName) {
    console.log('Usage: node index.js <project-name>')
    process.exit(1)
  }

  try {
    const { main } = require(`./dist/${projectName}/main.js`)

    if (!main) {
      console.log(`Project ${projectName} doesn't export main function`)
      process.exit(1)
    }

    return projectName
  } catch (error) {
    console.log(`Project ${projectName} not found in dist folder`)
    process.exit(1)
  }
}

function spawnChildProcess(projectName) {
  const { spawn } = require('node:child_process')

  const child = spawn('node', ['./runner.js',`./dist/${projectName}/main.js`], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  })

  child.on('error', (error) => {
    console.log('Error: ', error)
    process.exit(1)
  })

  return child
}

function watchProjectFolder(projectName, childProcess) {
  const fs = require('node:fs')

  const watcher = fs.watch(`./dist/${projectName}`)

  watcher.on('change', () => {
    console.clear()
    childProcess.kill()
    childProcess = spawnChildProcess(projectName)
  })
}

run()
