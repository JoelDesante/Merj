const {app, BrowserWindow} = require('electron');

let win; // Define a Global reference to the window variable. Protects the window from garbage collection.

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});

  win.loadFile('index.html');
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win == null) {
    createWindow();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 84) {
    win.webContents.openDevTools();
  }
});
