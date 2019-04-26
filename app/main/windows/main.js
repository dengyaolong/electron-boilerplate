const BrowserWindow = require('./browser-window')

let mainWindow

function createWindow () {
    if (mainWindow) {
        mainWindow.show()
        return;
    }
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })

    mainWindow.load()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

module.exports = {create: createWindow}
