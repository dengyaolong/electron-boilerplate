'use strict'

const { app, Menu } = require('electron')
const {create: createAboutWindow} = require('../../windows/about')
const PRODUCT_NAME = app.getName()

module.exports = function () {
    let menu = Menu.buildFromTemplate([
        {
            label: PRODUCT_NAME,
            submenu: [
                {
                    label: `关于${PRODUCT_NAME}`,
                    click: createAboutWindow
                },
                {
                    type: 'separator'
                },
                {
                    label: '服务',
                    role: 'services',
                    submenu: []
                },
                {
                    type: 'separator'
                },
                {
                    label: `隐藏${PRODUCT_NAME}`,
                    accelerator: 'Command+H',
                    role: 'hide'
                },
                {
                    label: '隐藏其他',
                    accelerator: 'Command+Alt+H',
                    role: 'hideothers'
                },
                {
                    label: '全部显示',
                    role: 'unhide'
                },
                {
                    type: 'separator'
                },
                {
                    label: `退出${PRODUCT_NAME}`,
                    accelerator: 'Command+Q',
                    click: () => app.quit()
                }
            ]
        },
        {
            label: '编辑',
            submenu: [
                {
                    label: '撤销',
                    accelerator: 'Command+Z',
                    role: 'undo'
                },
                {
                    label: '重做',
                    accelerator: 'Shift+Command+Z',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: '剪切',
                    accelerator: 'Command+X',
                    role: 'cut'
                },
                {
                    label: '复制',
                    accelerator: 'Command+C',
                    role: 'copy'
                },
                {
                    label: '粘贴',
                    accelerator: 'Command+V',
                    role: 'paste'
                },
                {
                    label: '全选',
                    accelerator: 'Command+A',
                    role: 'selectall'
                }
            ]
        },
        {
            label: '窗口',
            role: 'window',
            submenu: [
                {
                    label: '最小化',
                    accelerator: 'Command+M',
                    role: 'minimize'
                },
                {
                    label: '关闭窗口',
                    accelerator: 'Command+W',
                    role: 'close'
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
}
