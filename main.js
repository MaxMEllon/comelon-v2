const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 400, height: 800 });
  mainWindow.loadURL('http://localhost:8080');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
app.on('window-all-closed', function () {
  app.quit();
});
