import { BrowserWindow as ElectronBrowserWindow, ipcMain, ipcRenderer } from 'electron'

import { ipc } from './helpers'
import { Options, FinalOptions, WindowMethods } from './types'

/**
 * Control your Electron Browser Window securely from the renderer.
 * @example
    ```
    // Main process
    import WindowControls from 'electron-window-controls'

    WindowControls.initMain()

    // Renderer process
    import { BrowserWindow } from 'electron-window-controls'

    BrowserWindow.minimize()

    BrowserWindow.toggleMaximize()

    BrowserWindow.close()

    BrowserWindow.isMaximized()
    ```
 */
class ElectronWindowControls {

	opts: FinalOptions
	isMaximized: boolean

	constructor(options?: Options) {
		const defaultOptions: FinalOptions = {
			isMaximized: false
		}

		this.opts = Object.assign({}, defaultOptions, options)
		this.isMaximized = this.opts.isMaximized
	}

	/**
	 * Attach the required IPC event handlers.
	 */
	initIpc(): void {
		ipcMain.on(ipc.TOGGLE_MAXIMIZE, (event) => {
			const win = ElectronBrowserWindow.fromWebContents(event.sender)
			if (!win) throw new Error('[electron-window-controls] No window found')

			if (this.isMaximized) {
				this.isMaximized = false
				win.unmaximize()
			} else {
				this.isMaximized = true
				win.maximize()
			}
		})

		ipcMain.on(ipc.MINIMIZE, (event) => {
			const win = ElectronBrowserWindow.fromWebContents(event.sender)
			if (!win) throw new Error('[electron-window-controls] No window found')

			win.minimize()
		})

		ipcMain.on(ipc.CLOSE, (event) => {
			const win = ElectronBrowserWindow.fromWebContents(event.sender)
			if (!win) throw new Error('[electron-window-controls] No window found')

			win.close()
		})
		
		ipcMain.on(ipc.MAXIMIZED, (event) => {
			var win = ElectronBrowserWindow.fromWebContents(event.sender);
			if (!win) throw new Error('[electron-window-controls] No window found');
			event.returnValue = win.isMaximized();
		});
	}

	/**
	 * Initialize the Electron main process.
	 *
	 * Will create a new ElectronWindowControls instance and attach the required event listeners.
	 *
	 * **Note:** Only use it in the Electron main process.
	 * @param {Options} options
	 * @returns {ElectronWindowControls} New ElectronWindowControls instance
	 * @example
		```
		import WindowControls from 'electron-window-controls'

		WindowControls.initMain()
		```
	 */
	static initMain(options?: Options): ElectronWindowControls {
		const windowControls = new ElectronWindowControls(options)
		windowControls.initIpc()

		return windowControls
	}

	/**
	 * Initialize the renderer.
	 *
	 * **Note:** Only use it in the Electron renderer process.
	 * @returns {WindowMethods} Methods to control the BrowserWindow from which they are called
	 */
	static initRenderer(): WindowMethods {
		return {
			close: () => {
				ipcRenderer.send(ipc.CLOSE)
			},
			minimize: () => {
				ipcRenderer.send(ipc.MINIMIZE)
			},
			toggleMaximize: () => {
				ipcRenderer.send(ipc.TOGGLE_MAXIMIZE)
			},
			isMaximized: () => {
				return ipcRenderer.sendSync(ipc.MAXIMIZED);
			}
		}
	}
}

/**
 * Methods to control the BrowserWindow from which they are called
 */
export const BrowserWindow = ElectronWindowControls.initRenderer()

export default ElectronWindowControls
