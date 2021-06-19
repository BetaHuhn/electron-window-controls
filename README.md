<div align="center">
  
# Electron Window Controls

[![Node CI](https://github.com/BetaHuhn/electron-window-controls/workflows/Node%20CI/badge.svg)](https://github.com/BetaHuhn/electron-window-controls/actions?query=workflow%3A%22Node+CI%22) [![Release CI](https://github.com/BetaHuhn/electron-window-controls/workflows/Release%20CI/badge.svg)](https://github.com/BetaHuhn/electron-window-controls/actions?query=workflow%3A%22Release+CI%22) [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BetaHuhn/electron-window-controls/blob/master/LICENSE) ![David](https://img.shields.io/david/betahuhn/electron-window-controls)

Control your Electron Browser Window securely from the renderer

</div>

## 👋 Introduction

[electron-window-controls](https://github.com/BetaHuhn/electron-window-controls) lets you control your Electron app's BrowserWindow directly from the renderer process itself. It uses IPC communication to do this securely **without** the use of the `remote` module. Once it's initialized in the main process, it can be used in any renderer process and it will figure out which BrowserWindow you want to control automatically.

## 🚀 Get started

```shell
npm install electron-window-controls
```

*Tested with Electron 11 or later*

## 📚 Usage

To use [electron-window-controls](https://github.com/BetaHuhn/electron-window-controls), simply inititalize it in the Electron main process:

```js
import WindowControls from 'electron-window-controls'

WindowControls.initMain()
```

And you are done! 🎉

After that you can use the provided methods in the renderer:

```js
import { BrowserWindow } from 'electron-window-controls'

BrowserWindow.minimize()

BrowserWindow.toggleMaximize()

BrowserWindow.close()
```

[electron-window-controls](https://github.com/BetaHuhn/electron-window-controls) will control the BrowserWindow from which it was called.

## ⚙️ Options

You can also pass an options object to `.initMain()` or `new WindowControls()` to customize the behaviour of [electron-window-controls](https://github.com/BetaHuhn/electron-window-controls) further:

```js
WindowControls.initMain({
	// options...
})
```
<details><summary>Here are all the options <a href="https://github.com/BetaHuhn/electron-window-controls">electron-window-controls</a> supports:</summary>
<br>

| Name | Type | Description | Default |
| ------------- | ------------- | ------------- | ------------- |
| `isMaximized` | `boolean` | The initial window state | `false` |

</details>

## 📖 Examples

Here are a few examples to help you get started!

### Basic Example

**Main process**:

```js
import WindowControls from 'electron-window-controls'

WindowControls.initMain()
```

**Renderer process**:

```js
import { BrowserWindow } from 'electron-window-controls'

BrowserWindow.minimize()

BrowserWindow.toggleMaximize()

BrowserWindow.close()
```

---

### Custom Titlebar with Vue

You might want to add a custom titlebar to your Electron app. This can be achived pretty easy with [electron-window-controls](https://github.com/BetaHuhn/electron-window-controls) and [Vue.js]():

**Main process**:

```js
import { BrowserWindow } from 'electron'
import WindowControls from 'electron-window-controls'

const win = new BrowserWindow({
	frame: false // Hide the default application frame
})

// Load the Vue app
win.loadURL('app://./index.html')

// Initialize electron-window-controls
WindowControls.initMain()
```

**Vue renderer**:

```html
<template>
  <!-- Your titlebar -->
  <div class="controls">
	<button @click="minimize">Min</button>
	<button @click="toggleMaximize">Max</button>
	<button @click="close">Close</button>
  </div>
</template>

<script>
import { BrowserWindow } from 'electron-window-controls'

export default {
	methods: {
		minimize() {
			BrowserWindow.minimize()
		},
		toggleMaximize() {
			BrowserWindow.toggleMaximize()
		},
		close() {
			BrowserWindow.close()
		}
	}
}
</script>
```

---

## 💻 Development

Issues and PRs are very welcome!

- run `yarn lint` or `npm run lint` to run eslint.
- run `yarn watch` or `npm run watch` to watch for changes.
- run `yarn build` or `npm run build` to produce a compiled version in the `lib` folder.

## ❔ About

This project was developed by me ([@betahuhn](https://github.com/BetaHuhn)) in my free time. If you want to support me:

[![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=394RTSBEEEFEE)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F81S2RK)

## 📄 License

Copyright 2021 Maximilian Schiller

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
