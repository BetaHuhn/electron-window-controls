import { BrowserWindow as ElectronBrowserWindow, ipcMain, ipcRenderer } from 'electron'

import { ipc } from './helpers'
// import TitlebarComponent from './components/TitleBar.vue'

class ElectronVueTitlebar {

	opts: any
	win?: any
	isMaximized?: boolean

	constructor(options: any) {
		const defaultOptions = {
			isMaximized: false,
			framed: false
		}

		this.opts = Object.assign({}, defaultOptions, options)
		this.isMaximized = this.opts.isMaximized
	}

	initIpc(win: ElectronBrowserWindow) {
		this.win = win

		ipcMain.on(ipc.TOGGLE_MAXIMIZE, () => {
			if (this.isMaximized) {
				this.isMaximized = false
	
				console.log('unmaximize')
				this.win.unmaximize()
			} else {
				this.isMaximized = true
	
				console.log('maximize')
				this.win.maximize()
			}
		})
	
		ipcMain.on(ipc.MINIMIZE, () => {
			console.log('minimize')
			this.win.minimize()
		})
	
		ipcMain.on(ipc.CLOSE, () => {
			console.log('close')
			this.win.close()
		})
	}

	static ElectroncreateBrowserWindow(options: any): ElectronBrowserWindow {
		// Parse winState specific options from options
		const titleBarOpts = Object.assign({}, { isMaximized: options?.isMaximized, framed: options?.frame }, options?.titlebar)

		const titlebar = new ElectronVueTitlebar(titleBarOpts)

		// Cleanup options object
		delete options.titlebar
		delete options.isMaximized

		// Create a new ElectronBrowserWindow with the provided options and the current winState
		const win = new ElectronBrowserWindow(options)

		titlebar.initIpc(win)

		return win
	}

	static ElectronuseBrowserWindow(win: ElectronBrowserWindow, options?: any) {
		const titleBarOpts = Object.assign({}, { isMaximized: options?.isMaximized, framed: options?.frame }, options?.titlebar)

		const titlebar = new ElectronVueTitlebar(titleBarOpts)

		titlebar.initIpc(win)

		return titlebar
	}

	static initRenderer() {
		return {
			close: () => {
				ipcRenderer.send(ipc.CLOSE)
			},
		
			minimize: () => {
				ipcRenderer.send(ipc.MINIMIZE)
			},
		
			toggleMaximize: () => {
				ipcRenderer.send(ipc.TOGGLE_MAXIMIZE)
			}
		}
	}
}

/* export const Titlebar = {
    install(Vue: any) {
        Vue.component(TitlebarComponent.name, TitlebarComponent);
    }
} */

export const BrowserWindow = ElectronVueTitlebar.initRenderer()

export default ElectronVueTitlebar