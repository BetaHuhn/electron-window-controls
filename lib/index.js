"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserWindow = void 0;
var electron_1 = require("electron");
var helpers_1 = require("./helpers");
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
    ```
 */
var ElectronWindowControls = /** @class */ (function () {
    function ElectronWindowControls(options) {
        var defaultOptions = {
            isMaximized: false
        };
        this.opts = Object.assign({}, defaultOptions, options);
        this.isMaximized = this.opts.isMaximized;
    }
    /**
     * Attach the required IPC event handlers.
     */
    ElectronWindowControls.prototype.initIpc = function () {
        var _this = this;
        electron_1.ipcMain.on(helpers_1.ipc.TOGGLE_MAXIMIZE, function (event) {
            var win = electron_1.BrowserWindow.fromWebContents(event.sender);
            if (!win)
                throw new Error('[electron-window-controls] No window found');
            if (_this.isMaximized) {
                _this.isMaximized = false;
                win.unmaximize();
            }
            else {
                _this.isMaximized = true;
                win.maximize();
            }
        });
        electron_1.ipcMain.on(helpers_1.ipc.MINIMIZE, function (event) {
            var win = electron_1.BrowserWindow.fromWebContents(event.sender);
            if (!win)
                throw new Error('[electron-window-controls] No window found');
            win.minimize();
        });
        electron_1.ipcMain.on(helpers_1.ipc.CLOSE, function (event) {
            var win = electron_1.BrowserWindow.fromWebContents(event.sender);
            if (!win)
                throw new Error('[electron-window-controls] No window found');
            win.close();
        });
    };
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
    ElectronWindowControls.initMain = function (options) {
        var windowControls = new ElectronWindowControls(options);
        windowControls.initIpc();
        return windowControls;
    };
    /**
     * Initialize the renderer.
     *
     * **Note:** Only use it in the Electron renderer process.
     * @returns {WindowMethods} Methods to control the BrowserWindow from which they are called
     */
    ElectronWindowControls.initRenderer = function () {
        return {
            close: function () {
                electron_1.ipcRenderer.send(helpers_1.ipc.CLOSE);
            },
            minimize: function () {
                electron_1.ipcRenderer.send(helpers_1.ipc.MINIMIZE);
            },
            toggleMaximize: function () {
                electron_1.ipcRenderer.send(helpers_1.ipc.TOGGLE_MAXIMIZE);
            }
        };
    };
    return ElectronWindowControls;
}());
/**
 * Methods to control the BrowserWindow from which they are called
 */
exports.BrowserWindow = ElectronWindowControls.initRenderer();
exports.default = ElectronWindowControls;
