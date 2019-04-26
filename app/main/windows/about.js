const BrowserWindow = require('./browser-window')

let aboutWindow

function createWindow () {
    if (aboutWindow) {
        aboutWindow.show()
        return;
    }
    aboutWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    })

    aboutWindow.load()

    aboutWindow.on('closed', function () {
        aboutWindow = null
    })
}

module.exports = {create: createWindow}

