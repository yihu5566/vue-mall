<template>
	<div class="goods-list">
		<goods-list-item
			class="good-list-item"
			v-for="(item, index) in goods"
			:key="index"
			:goodsItem="item"
		>
		</goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		name: 'GoodsList',
		components: {
			GoodsListItem,
		},
		props: ['goods'],
	}
</script>

<style lang="less" scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		margin: 5px 0 10px 0;
		justify-content: space-around;
	}
</style>