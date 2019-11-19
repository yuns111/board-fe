<template>
  <div id="app">
    <div id="nav">
        <header-component />
		<router-view />
    </div>
  </div>
</template>
<script>
	import HeaderComponent from '@/components/HeaderComponent';
	export default {
		name: 'App',
		components: {
			HeaderComponent
		}
	}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
