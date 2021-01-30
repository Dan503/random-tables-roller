<template>
	<p>
		<strong>{{ label }}:</strong> {{ result }}
	</p>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
import { RollTable } from '../utils/utilTypes'

export default defineComponent({
	name: 'RollResult',
	props: {
		label: {
			type: String,
			required: true,
		},
		dataTable: {
			type: Object as PropType<RollTable>,
			required: true,
		},
	},
	setup: () => {
		const result = ref('---')
		return { result }
	},
})
</script>

<style scoped lang="scss">
a {
	color: #42b983;
}
</style>