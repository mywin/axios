'use strict'
const chalk = require('chalk')
const packageConfig = require('../package.json')
const exec = require('child_process').exec
module.exports = function () {
  const cmd = packageConfig.scripts.easymock
  if (cmd) {
    exec(cmd, function(error, stdout, stderr) {
      if(error) {
        console.log(chalk.red(error))
      }else{
        console.log(chalk.green(stdout))
      }
    })
    /*
    const result = exec(cmd).toString().trim()
    console.log(chalk.green(result))
    */
  }
}
