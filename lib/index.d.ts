import { BrowserWindow as ElectronBrowserWindow } from 'electron';
declare class ElectronVueTitlebar {
    opts: any;
    win?: any;
    isMaximized?: boolean;
    constructor(options: any);
    initIpc(win: ElectronBrowserWindow): void;
    static ElectroncreateBrowserWindow(options: any): ElectronBrowserWindow;
    static ElectronuseBrowserWindow(win: ElectronBrowserWindow, options?: any): ElectronVueTitlebar;
    static initRenderer(): {
        close: () => void;
        minimize: () => void;
        toggleMaximize: () => void;
    };
}
export declare const BrowserWindow: {
    close: () => void;
    minimize: () => void;
    toggleMaximize: () => void;
};
export default ElectronVueTitlebar;
