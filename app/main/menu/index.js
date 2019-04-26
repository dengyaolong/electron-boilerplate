'use strict'

module.exports = function () {
    if (process.platform === 'win32') {
        return require('./windows')()
    } else if(process.platform === 'darwin') {
        return require('./mac')()
    }
}

