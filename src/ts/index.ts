import { app, BrowserWindow } from 'electron';
import * as path from "path";

function createWindow() : void {
	const win = new BrowserWindow({
		width: 1080,
		height: 800,
		webPreferences: {
			preload: path.join(app.getAppPath(), 'preload.js'),
			enableRemoteModule: true,
			nodeIntegration: true
		},
		frame: false,
		minWidth: 1024,
		minHeight: 500,
	})

	

	win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
	  app.quit()
	}
  })
  
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})