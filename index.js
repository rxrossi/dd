const { app, BrowserWindow } = require('electron')

function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 800 })
  win.loadURL('http://localhost:9000/')
}

app.on('ready', createWindow)
