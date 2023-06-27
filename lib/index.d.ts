import { Options, FinalOptions, WindowMethods } from 'electron-window-controls/lib/types';
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
declare class ElectronWindowControls {
    opts: FinalOptions;
    isMaximized: boolean;
    constructor(options?: Options);
    /**
     * Attach the required IPC event handlers.
     */
    initIpc(): void;
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
    static initMain(options?: Options): ElectronWindowControls;
    /**
     * Initialize the renderer.
     *
     * **Note:** Only use it in the Electron renderer process.
     * @returns {WindowMethods} Methods to control the BrowserWindow from which they are called
     */
    static initRenderer(): WindowMethods;
}
/**
 * Methods to control the BrowserWindow from which they are called
 */
export declare const BrowserWindow: WindowMethods;
export default ElectronWindowControls;
