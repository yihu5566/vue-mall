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
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	// swiper
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
	import { getHomeMulitdata } from '@/network/home.js'
	export default {
		name: 'Home',
		components: {
			NavBar,
			swiper,
			swiperSlide,
		},
		data() {
			return {
				banners: [],
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
		},
	}
</script>

<style lang="less" scoped>
	.swiper {
		margin-top: 44px;
	}
</style>