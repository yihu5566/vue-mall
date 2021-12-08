<template>
	<div class="detail">
		<detail-nav-bar class="detail-nav-bar" />
		<scroll class="scrool-wrapper">
			<detail-swiper :topImages="topImages" />
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop="shopInfo" />
			<detail-goods-info :detailInfo="detailInfo" />
			<detail-param-info :paramInfo="paramInfo" />
			<detail-comment-info :commentInfo="commentInfo" ref="comment" />
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childComponents/DetailNavBar.vue'
	import DetailSwiper from './childComponents/DetailSwiper.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import DetailBaseInfo from '@/views/detail/childComponents/DetailBaseInfo.vue'
	import DetailShopInfo from '@/views/detail/childComponents/DetailShopInfo.vue'
	import DetailGoodsInfo from '@/views/detail/childComponents/DetailGoodsInfo.vue'
	import DetailParamInfo from '@/views/detail/childComponents/DetailParamInfo.vue'
	import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'

	import { getDetail, Goods, ShopInfo, GoodsParam } from '@/network/detail'
	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			Scroll,
			DetailBaseInfo,
			DetailSwiper,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
		},
		data() {
			return {
				iid: '',
				goods: {},
				topImages: {},
				shopInfo: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
			}
		},
		created() {
			this.iid = this.$route.params.iid
			getDetail(this.iid).then((res) => {
				const data = res.data.result
				console.log(data)
				// 1.获取顶部的轮播图数据
				this.topImages = data.itemInfo.topImages || []
				console.log(`===topImages====>>>>>>>${this.topImages}`)

				// 商品信息
				this.goods =
					new Goods(data.itemInfo, data.columns, data.shopInfo.services) || {}
				console.log(`===goods====>>>>>>>${JSON.stringify(this.goods)}`)

				//店铺信息
				this.shopInfo = new ShopInfo(data.shopInfo) || []
				// console.log(`=====shopInfo==>>>>>>>${JSON.stringify(this.shopInfo)}`)

				//商品信息
				this.detailInfo = data.detailInfo || {}
				// console.log(`=====detailInfo==>>>>>>>${JSON.stringify(this.detailInfo)}`)

				//商品参数
				this.paramInfo =
					new GoodsParam(data.itemParams.info, data.itemParams.rule) || {}
				// console.log(`===paramInfo====>>>>>>>${JSON.stringify(this.paramInfo)}`)

				//保存评论信息
				if (data.rate.list) {
					this.commentInfo = data.rate.list[0]
				}
			})
		},
	}
</script>

<style lang="less" scoped>
	.detail {
		background-color: #fff;
		height: 100vh;
		position: relative;
		z-index: 9;
		margin-bottom: 44px;
	}
	.scrool-wrapper {
		height: calc(100% - 44px);
		top: 44px;
		bottom: 49px;
	}
</style>