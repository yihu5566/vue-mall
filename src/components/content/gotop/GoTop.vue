<template>
	<div class="go-top">
		<img src="@/assets/img/common/top.png" alt="" />
	</div>
</template>

<script>
	export default {
		name: 'GoTop',
	}
</script>

<style lang="less" scoped>
	.go-top {
		position: fixed;
		z-index: 9px;
		width: 60px;
		bottom: 100px;
		right: 20px;
	}
</style>