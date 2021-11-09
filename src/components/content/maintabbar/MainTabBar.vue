<template>
	<div>
		<tab-bar>
			<tab-bar-item>
				<slot name="item-icon">
					<img src="@/assets/img/tabbar/home.svg" alt="" />
				</slot>
				<slot name="item-text">首页</slot>
			</tab-bar-item>

			<tab-bar-item>
				<slot name="item-icon">
					<img src="@/assets/img/tabbar/home.svg" alt="" />
				</slot>
				<slot name="item-text">首页</slot>
			</tab-bar-item>

			<tab-bar-item>
				<slot name="item-icon">
					<img src="@/assets/img/tabbar/home.svg" alt="" />
				</slot>
				<slot name="item-text">首页</slot>
			</tab-bar-item>

			<tab-bar-item>
				<slot name="item-icon">
					<img src="@/assets/img/tabbar/home.svg" alt="" />
				</slot>
				<slot name="item-text">首页</slot>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar.vue'
	import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		},
		props: ['path']
	}
</script>

<style>
</style>