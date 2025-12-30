const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: __dirname + "/preload.js",
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // YouTube öffnen
  win.loadURL("https://www.youtube.com/@SilvanMC");
}

app.on("ready", createWindow);
