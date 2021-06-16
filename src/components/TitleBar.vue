<template>
  <div class="titlebar">
    <div class="draggable">
      <div class="controls">
        <div class="icon" @click="minimize">
          <MinusIcon />
        </div>
        <div class="icon" @click="toggleMaximize">
          <WindowIcon />
        </div>
        <div class="icon close-icon" @click="close">
          <CloseIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from './Icon/close'
import MinusIcon from './Icon/minus'
import WindowIcon from './Icon/window'

import { ElectronWindow } from '../'

export default {
	name: 'electron-vue-titlebar',
	components: {
		CloseIcon,
		MinusIcon,
		WindowIcon
	},
	methods: {
		minimize() {
			ElectronWindow.minimize()
		},
		toggleMaximize() {
			ElectronWindow.toggleMaximize()
		},
		close() {
			ElectronWindow.close()
		}
	}
}
</script>

<style scoped>
	.titlebar {
		--background: #212737;
		--background-light: #30354b;
		--foreground: #636c80;
		--foreground-light: #ddddec;
		--close: rgb(187 61 61);

		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid var(--background);
		border-bottom: 0;
		border-top: 0;
		background: var(--background);
	}

	.draggable {
		height: 25px;
		-webkit-app-region: drag;
		display: flex;
		align-items: center;
	}

	.controls {
		margin-left: auto;
		display: flex;
		align-items: center;
		-webkit-app-region: no-drag;
	}

	.icon {
		color: var(--foreground);
		padding: 2px 3px;
		transition: all .2s ease;
		cursor: pointer;
	}

	.icon:hover {
		background: var(--background-light);
		color: var(--foreground-light);
	}

	.close-icon:hover {
		background: var(--red);
	}
</style>