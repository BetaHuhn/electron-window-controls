<template>
	<Icon :size="size">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke="color">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
		</svg>
	</Icon>
</template>

<script>
import Icon from './index'

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