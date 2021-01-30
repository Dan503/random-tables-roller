<template>
	<RollResult :dataTable="races" label="Race" />
	<button @click="roll()">Roll</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import RollResult from './components/RollResult.vue'
import { races } from './data'

export default defineComponent({
	name: 'App',
	data: () => ({
		races,
	}),
	components: {
		HelloWorld,
		RollResult,
	},
})
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>