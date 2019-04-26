const _BrowserWindow = require('electron').BrowserWindow
const path = require('path')
const rendererPath = path.join(__dirname, '../../renderer/pages')
const BROWSER_WINDOW_PATH = (module.parent && module.parent.filename) ? module.parent.filename : ''
delete require.cache[__filename]


class BrowserWindow extends _BrowserWindow {
    constructor (props) {
        super(props)
    }
    load (file, options) {
        if (!file) {
            file = path.basename(BROWSER_WINDOW_PATH,'.js')
            this.loadFile(path.join(rendererPath, file, './index.html'), options)
        } else {
            this.loadFile(file, options)
        }
    }
}

module.exports = BrowserWindow
