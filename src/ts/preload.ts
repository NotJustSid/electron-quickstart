import { remote, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('app', {
    currentWindow: {
        close: () => {
            let cWindow = remote.BrowserWindow.getFocusedWindow();
            cWindow.close();
        },
        minimize: () => {
            let cWindow = remote.BrowserWindow.getFocusedWindow();
            cWindow.minimize();
        },
        maximize: () => {
            let cWindow = remote.BrowserWindow.getFocusedWindow();
            cWindow.maximize();
        },
        restore: () => {
            let cWindow = remote.BrowserWindow.getFocusedWindow();
            cWindow.restore();
        },
        isMaximized: () : boolean => {
            let cWindow = remote.BrowserWindow.getFocusedWindow();
            return cWindow.isMaximized();
        }
    },
})