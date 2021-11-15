<template>
	<div class="goods-item" @click="itemClick">
		<img :src="showImage" :key="showImage" alt="" />
		<div class="goods-box">
			<p class="title">{{ goodsItem.title }}</p>
			<span class="price">￥{{ goodsItem.price }}</span>
			<span class="sale"><span class="small">已售卖</span>{{ showSale }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		props: ['goodsItem'],
		computed: {
			showImage() {
				return this.goodsItem.img || this.goodsItem.show.img
			},
			showSale() {
				return this.goodsItem.sale
			},
		},
		methods: {
			itemClick() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			},
		},
	}
</script>

<style lang="less" scoped>
	.goods-item {
		width: 45%;
		margin: 8px 0;
		img {
			height: 85%;
			border-radius: 10px;
		}
		.goods-box {
			text-align: center;
			color: var(--color-text);
			font-size: var(--font-size);
			.title {
				display: -webkit-box;
				margin: 5px 0;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
			.price {
				float: left;
				color: var(--color-high-text);
			}
			.sale {
				float: right;
			}
		}
	}
</style>