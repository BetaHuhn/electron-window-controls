import { SetRequired } from 'type-fest';
/**
 * Options to configure [electron-window-controls](https://github.com/BetaHuhn/electron-window-controls)
 */
export interface Options {
    /**
     * The initial window state
     *
     * @default false
     */
    isMaximized?: boolean;
}
export interface WindowMethods {
    /**
     * Close the window
     */
    close: () => void;
    /**
     * Minimize the window
     */
    minimize: () => void;
    /**
     * Toggle the maximized state of the window
     */
    toggleMaximize: () => void;
    /**
     * Returns the maximization state of the window
     */
    isMaximized: () => boolean;
}
export declare type FinalOptions = SetRequired<Options, 'isMaximized'>;
