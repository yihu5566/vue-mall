<template>
	<div class="home">
		<nav-bar> <h4 slot="center">购物街</h4></nav-bar>
		<scroll
			class="scrool-wrapper"
			:probeType="3"
			:pullUpLoad="true"
			ref="scroll"
		>
			<!-- 轮播图 -->
			<swiper
				:options="swiperOption"
				class="swiper"
				ref="mySwiper"
				v-if="banners.length"
			>
				<swiper-slide v-for="(banner, index) in banners" :key="index">
					<img :src="banner.image" :title="banner.title" @load="imgLoad" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view />
			<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<go-top @click.native="backTop" />
	</div>
</template>

<script>
	//组件
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
	import RecommendView from '@/views/home/childview/RecommendView.vue'
	import FeatureView from '@/views/home/childview/FeatureView.vue'
	import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	import GoodsList from '@/components/content/goods/GoodsList.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import GoTop from '@/components/content/gotop/GoTop.vue'

	//api
	import { getHomeMulitdata, getHomeGoods } from '@/network/home.js'

	// 返回顶部混入
	// import { backTopMixIn } from '@/common/mixin'
	export default {
		name: 'Home',
		components: {
			NavBar,
			swiper,
			swiperSlide,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			Scroll,
			GoTop,
		},
		// mixins: [backTopMixIn],
		data() {
			return {
				banners: [],
				recommends: [],
				swiperOption: {
					loop: true,
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: false,
					},
					// 显示分页
					pagination: {
						el: '.swiper-pagination',
					},
				},
				goods: {
					pop: { page: 0, list: [] },
					new: { page: 0, list: [] },
					sell: { page: 0, list: [] },
				},
				// 点击获取类型
				currentType: 'pop',
				isShowTop: true,
			}
		},
		created() {
			// 获取轮播图数据
			this.getHomeMultidata()
			// 获取商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			},
		},
		methods: {
			getScrollPx(y) {
				console.log('滑动距离', y)
				// 当滑动到一定位置出现返回顶部
				this.isShowTop = y < -1000 ? true : false
			},
			backTop() {
				this.$refs.scroll.scrollTop(0, 0)
			},

			getHomeMultidata() {
				getHomeMulitdata().then(({ data: { data } }) => {
					this.banners = data.banner.list
					this.recommends = data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(({ data: { data } }) => {
					// console.log(data)
					this.goods[type].list.push(...data.list)
					this.goods[type].page += 1
				})
			},

			imgLoad() {},
			tabClick(index) {
				console.log('---tabClick-----', index)
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
			},
		},
	}
</script>

<style lang="less" scoped>
	.home {
		height: 100vh;
		font-size: var(--font-size);
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