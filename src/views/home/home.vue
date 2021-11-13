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
		<ul>
			<li class="list_1">list 1</li>
			<li class="list_2">list 2</li>
			<li class="list_3">list 3</li>
			<li class="list_4">list 4</li>
			<li class="list_5">list 5</li>
			<li class="list_6">list 6</li>
			<li class="list_7">list 7</li>
			<li class="list_8">list 8</li>
			<li class="list_9">list 9</li>
			<li class="list_10">list 10</li>
		</ul>
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
	//api
	import { getHomeMulitdata } from '@/network/home.js'
	export default {
		name: 'Home',
		components: {
			NavBar,
			swiper,
			swiperSlide,
			RecommendView,
			FeatureView,
			TabControl,
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
			}
		},
		created() {
			this.getHomeMultidata()
		},
		methods: {
			getHomeMultidata() {
				getHomeMulitdata().then(({ data: { data } }) => {
					this.banners = data.banner.list
					this.recommends = data.recommend.list
				})
			},
			imgLoad() {},
			tabClick(index) {
				console.log('---tabClick-----', index)
			},
		},
	}
</script>

<style lang="less" scoped>
	.home {
		height: 100vh;
	}
	.swiper {
		margin-top: 44px;
	}
</style>