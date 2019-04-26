const {app} = require('electron')
const {create: createMainWindow} = require('./windows/main')

app.on('ready', () => {
    createMainWindow()
    require('./menu')()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  createMainWindow()
})

