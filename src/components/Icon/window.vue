<template>
	<Icon :size="size">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			:stroke="color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<rect
			x="7"
			y="5"
			width="13"
			height="13"
			rx="1"
			ry="1"
			></rect>
		</svg>
	</Icon>
</template>

<script>
import Icon from '../Icon'

export default {
	components: {
		Icon
	},
	props: {
		color: {
			type: String,
			default: 'currentColor'
		},
		size: {
			type: String,
			default: '20px'
		}
	}
}
</script>