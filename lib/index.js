"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronWindow = void 0;
var electron_1 = require("electron");
var helpers_1 = require("./helpers");
// import TitlebarComponent from './components/TitleBar.vue'
var ElectronVueTitlebar = /** @class */ (function () {
    function ElectronVueTitlebar(options) {
        var defaultOptions = {
            isMaximized: false,
            framed: false
        };
        this.opts = Object.assign({}, defaultOptions, options);
        this.isMaximized = this.opts.isMaximized;
    }
    ElectronVueTitlebar.prototype.initIpc = function (win) {
        var _this = this;
        this.win = win;
        electron_1.ipcMain.on(helpers_1.ipc.TOGGLE_MAXIMIZE, function () {
            if (_this.isMaximized) {
                _this.isMaximized = false;
                console.log('unmaximize');
                _this.win.unmaximize();
            }
            else {
                _this.isMaximized = true;
                console.log('maximize');
                _this.win.maximize();
            }
        });
        electron_1.ipcMain.on(helpers_1.ipc.MINIMIZE, function () {
            console.log('minimize');
            _this.win.minimize();
        });
        electron_1.ipcMain.on(helpers_1.ipc.CLOSE, function () {
            console.log('close');
            _this.win.close();
        });
    };
    ElectronVueTitlebar.createBrowserWindow = function (options) {
        // Parse winState specific options from options
        var titleBarOpts = Object.assign({}, { isMaximized: options === null || options === void 0 ? void 0 : options.isMaximized, framed: options === null || options === void 0 ? void 0 : options.frame }, options === null || options === void 0 ? void 0 : options.titlebar);
        var titlebar = new ElectronVueTitlebar(titleBarOpts);
        // Cleanup options object
        delete options.titlebar;
        delete options.isMaximized;
        // Create a new BrowserWindow with the provided options and the current winState
        var win = new electron_1.BrowserWindow(options);
        titlebar.initIpc(win);
        return win;
    };
    ElectronVueTitlebar.useBrowserWindow = function (win, options) {
        var titleBarOpts = Object.assign({}, { isMaximized: options === null || options === void 0 ? void 0 : options.isMaximized, framed: options === null || options === void 0 ? void 0 : options.frame }, options === null || options === void 0 ? void 0 : options.titlebar);
        var titlebar = new ElectronVueTitlebar(titleBarOpts);
        titlebar.initIpc(win);
        return titlebar;
    };
    ElectronVueTitlebar.initRenderer = function () {
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
    return ElectronVueTitlebar;
}());
/* export const Titlebar = {
    install(Vue: any) {
        Vue.component(TitlebarComponent.name, TitlebarComponent);
    }
} */
exports.ElectronWindow = ElectronVueTitlebar.initRenderer();
exports.default = ElectronVueTitlebar;
