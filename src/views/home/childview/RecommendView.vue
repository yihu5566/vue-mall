<template>
	<div class="recommend">
		<div
			class="recommend-item"
			v-for="(item, index) in recommends"
			:key="index"
		>
			<img :src="item.image" alt="" />
			<div>{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: ['recommends'],
	}
</script>

<style lang="less" scoped>
	.recommend {
		display: flex;
		text-align: center;
		padding: 10px 0 20px 0;
		border-bottom: 5px solid #fff;
		.recommend-item {
			flex: 1;
			img {
				width: 65px;
				margin-bottom: 10px;
			}
			div {
				font-size: 12px;
				color: var(--color-text);
			}
		}
	}
</style>