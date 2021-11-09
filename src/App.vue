<template>
  <div id="app">
    <div> 我是-----</div>
  
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
	import MainTabBar from '@/components/content/maintabbar/MainTabBar.vue'
	export default {
		name: 'App',
		components: { MainTabBar },
	}
</script>

<style>
	@import 'assets/css/base.css';
	.main-tab-bar {
		background-color: aquamarine;
	}
</style>
