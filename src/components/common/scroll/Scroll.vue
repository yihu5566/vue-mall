<template>
	<div class="wrapper1" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Scroll',
		mounted() {
			// 第一步，绑定一个滚动事件，当滚动的距离达到浏览器窗口的内部高度的时候(大概一个屏幕的高度吧)
			//         就让回到顶部的小盒子显示出来
			window.addEventListener('scroll', this.handleScroll, true) // 这里加上true是为了保证浏览器滚动的及时性
		},
		methods: {
			// 滚动事件的回调函数
			handleScroll() {
				let scrolltop = document.documentElement.scrollTop // 获取当前页面的滚动条纵坐标位置
				// console.log('看看滚动了多高的距离', scrolltop)
				//发送事件出去，当前高度
				this.$emit('scrollY', scrolltop)
			},
			goToTop() {
				let scrolltop = document.documentElement.scrollTop // 获取当前页面的滚动条纵坐标位置
				// 定时器平滑滚动
				const time = setInterval(() => {
					document.documentElement.scrollTop = scrolltop -= 40
					if (scrolltop <= 0) {
						// 定时器要及时清除掉，要不然一直执行很恐怖的
						clearInterval(time)
					}
				}, 10)
			},

			scrollTo(y) {
				// 定时器平滑滚动
				document.documentElement.scrollTop = y
			},
			getScrollY() {
				return document.documentElement.scrollTop // 获取当前页面的滚动条纵坐标位置
			},
		},
	}
</script>

<style lang="less" scoped>
</style>