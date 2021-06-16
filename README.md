<div align="center">
  
# Electron Vue Titlebar

[![Node CI](https://github.com/BetaHuhn/electron-vue-titlebar/workflows/Node%20CI/badge.svg)](https://github.com/BetaHuhn/electron-vue-titlebar/actions?query=workflow%3A%22Node+CI%22) [![Release CI](https://github.com/BetaHuhn/electron-vue-titlebar/workflows/Release%20CI/badge.svg)](https://github.com/BetaHuhn/electron-vue-titlebar/actions?query=workflow%3A%22Release+CI%22) [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BetaHuhn/electron-vue-titlebar/blob/master/LICENSE) ![David](https://img.shields.io/david/betahuhn/electron-vue-titlebar)

Vue Titlebar for Electron Apps

</div>

## Features

- 🔨 **Customizable** - *customize the behaviour and styles to your liking*
- 🔌 **Easy integration** - *integrates easily with your existing BrowserWindow configuration*
- 🔋 **Batteries included** - *use the pre-made Telegram like titlebar component*
- 🤯 **Headless** - *create your own titlebar component and use the provided directives*

## 🚀 Get started

```shell
npm install electron-vue-titlebar
```

*Requires Electron 11 or later and currently only works with Vue 2*

## 📚 Usage

To use [electron-vue-titlebar](https://github.com/BetaHuhn/electron-vue-titlebar), specify the BrowserWindow you want the titlebar to control in the [Electron main process](https://www.electronjs.org/docs/tutorial/quick-start#run-the-main-process):

```js
import VueTitlebar from 'electron-vue-titlebar'

const win = new BrowserWindow({
	frame: false // Hide the default application frame
})

VueTitlebar.useBrowserWindow(win)
```

And then use the methods in the Vue renderer:

```vue
<script>
import { BrowserWindow } from 'electron-vue-titlebar'

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

And you are done! Your Electron app now has a custom Vue titlebar! 🎉

## ⚙️ Options

You can also pass an options object to `.useBrowserWindow()` or `.createBrowserWindow()` to customize the behaviour of [electron-vue-titlebar](https://github.com/BetaHuhn/electron-vue-titlebar) further:

```js
VueTitlebar.useBrowserWindow(win, {
	// options..
})
```
<details><summary>Here are all the options <a href="https://github.com/BetaHuhn/electron-vue-titlebar">electron-vue-titlebar</a> supports:</summary>
<br>

| Name | Type | Description | Default |
| ------------- | ------------- | ------------- | ------------- |
| `isMaximized` | `boolean` | The initial window state | `false` |

</details>

## 🛠️ Configuration

Here are some of the more important options in a more detailed form.

### Paths

You can specify different paths (i.e. parts) of you state with the `paths` option. It accepts an array of paths specified using dot notation e.g. `user.name`.

If no paths are given, the complete state is persisted. If an empty array is given, no state is persisted.

<details><summary>See Example</summary><br>
	
```js
PersistedState.create({
	paths: ['user.token']
})
```

Here, only the `user.token` will be persisted and rehydrated.
	
</details>

---

## 📖 Examples

Here are a few examples to help you get started!

### Basic Example

```js
import VueTitlebar from 'electron-vue-titlebar'

const win = new BrowserWindow({
	frame: false // Hide the default application frame
})

VueTitlebar.useBrowserWindow(win)
```

And then use the methods in the Vue renderer:

```vue
<script>
import { BrowserWindow } from 'electron-vue-titlebar'

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
