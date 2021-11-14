<template>
	<div class="home">
		<nav-bar> <h4 slot="center">购物街</h4></nav-bar>
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
		<recommend-view :recommends="this.recommends"></recommend-view>
		<feature-view />
		<tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
		<goods-list :goods="showGoods"></goods-list>
	</div>
</template>

<script>
	//组件
	import NavBar from '@/components/common/navbar/NavBar.vue'
	// swiper
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
	import RecommendView from '@/views/home/childview/RecommendView.vue'
	import FeatureView from '@/views/home/childview/FeatureView.vue'
	import TabControl from '@/components/common/tabcontrol/TabControl.vue'
	import GoodsList from '@/components/content/goods/GoodsList.vue'
	//api
	import { getHomeMulitdata, getHomeGoods } from '@/network/home.js'
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
		},
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
			getHomeMultidata() {
				getHomeMulitdata().then(({ data: { data } }) => {
					this.banners = data.banner.list
					this.recommends = data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(({ data: { data } }) => {
					console.log(data)
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
	.swiper {
		margin-top: 44px;
	}
</style>