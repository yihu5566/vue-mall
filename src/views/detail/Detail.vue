<template>
	<div class="detail">
		<detail-nav-bar class="detail-nav-bar" />
		<scroll class="scrool-wrapper">
			<detail-swiper :topImages="topImages" />
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shopInfo"></detail-shop-info>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childComponents/DetailNavBar.vue'
	import DetailSwiper from './childComponents/DetailSwiper.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import DetailBaseInfo from '@/views/detail/childComponents/DetailBaseInfo.vue'
	import DetailShopInfo from '@/views/detail/childComponents/DetailShopInfo.vue'

	import { getDetail, Goods } from '@/network/detail'
	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			Scroll,
			DetailBaseInfo,
			DetailSwiper,
			DetailShopInfo,
		},
		data() {
			return {
				iid: '',
				goods: {},
				topImages: {},
				shopInfo: {},
			}
		},
		created() {
			this.iid = this.$route.params.iid
			getDetail(this.iid).then((res) => {
				const data = res.data.result
				console.log(data)
				// 1.获取顶部的轮播图数据
				this.topImages = data.itemInfo.topImages
				// 商品信息
				this.goods = new Goods(
					data.itemInfo,
					data.columns,
					data.shopInfo.services
				)
				//店铺信息
				this.shopInfo = data.shopInfo
			})
		},
	}
</script>

<style lang="less" scoped>
	.detail-nav-bar {
		width: 100%;
	}
	.detail {
		background-color: white;
		height: 100vh;
		position: relative;
		z-index: 9px;
	}
	.scrool-wrapper {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		// overflow: hidden;
		// height: 100%;
		// display: flex;
		overflow: scroll;
	}
</style>