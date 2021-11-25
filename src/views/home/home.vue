<template>
	<div class="home">
		<nav-bar> <h4 slot="center">购物街</h4></nav-bar>
		<tab-control
			ref="tabControl1"
			class="tab-control-1"
			:titles="['流行', '新款', '精选']"
			@tabClick="tabClick"
			v-show="isTabFixed"
		/>
		<scroll class="scrool-wrapper" ref="scroll" @scrollY="getScrollPx">
			<!-- 轮播图 -->
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />

			<feature-view />
			<tab-control
				ref="tabControl2"
				:titles="['流行', '新款', '精选']"
				@tabClick="tabClick"
			/>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<go-top @click.native="backTop" v-show="isShowTop" />
	</div>
</template>

<script>
	//组件
	import NavBar from '@/components/common/navbar/NavBar.vue'
	// import { swiper, swiperSlide } from 'vue-awesome-swiper'
	// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
	import HomeSwiper from './childview/HomeSwiper.vue'
	// import RecommendView from '@/views/home/childview/RecommendView.vue'
	import FeatureView from './childview/FeatureView.vue'
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
			HomeSwiper,
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

				//距离顶部偏差
				tabOffsetTop: 0,
				//是吸顶
				isTabFixed: false,

				//  跳转路由时，保存位置
				saveY: 0,
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
				this.isShowTop = y > 1000 ? true : false
				this.isTabFixed = y > this.tabOffsetTop
			},
			backTop() {
				this.$refs.scroll.goToTop()
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
			swiperImageLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
				console.log(this.tabOffsetTop)
			},
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
				//是两个真的tabcontrol和替身tabcontrol统一起来
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
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
	}
	.tab-control-1 {
		/*这里需要改变tabcontrol的层级，使用定位，但是，这里不需要使用absolute或者是fixed*/
		display: flex;
		position: fixed;
		z-index: 9;
		top: 44px;
		background-color: white;
		left: 0;
		right: 0;
	}
</style>