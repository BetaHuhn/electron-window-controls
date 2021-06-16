import { BrowserWindow } from 'electron';
declare class ElectronVueTitlebar {
    opts: any;
    win?: any;
    isMaximized?: boolean;
    constructor(options: any);
    initIpc(win: BrowserWindow): void;
    static createBrowserWindow(options: any): BrowserWindow;
    static useBrowserWindow(win: BrowserWindow, options?: any): ElectronVueTitlebar;
    static initRenderer(): {
        close: () => void;
        minimize: () => void;
        toggleMaximize: () => void;
    };
}
export declare const ElectronWindow: {
    close: () => void;
    minimize: () => void;
    toggleMaximize: () => void;
};
export default ElectronVueTitlebar;
