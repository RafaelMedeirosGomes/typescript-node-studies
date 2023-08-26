function run() {
  const [_execPath, _scriptPath, modulePath] = process.argv

  const { main } = require(modulePath)

  main()
}

run()