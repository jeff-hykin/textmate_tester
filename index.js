const args = require('yargs').argv
const process = require('process')
const fs = require('fs')

// 
// api
// 
    // method: test, generate, perf
    // syntax
    // folder
    // file

// attempt to load package.json
const cwd = process.cwd()
const packagePath = `${cwd}/package.json`
let package = {
    textmate_tester: {}
}
if (fs.existsSync(packagePath)) {
    package = require(packagePath)
}

// prefer the commandline, but use the package.json as a backup
let options = {
    ...package.textmate_tester,
    ...args,
}

