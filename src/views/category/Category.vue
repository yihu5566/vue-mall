<template>
	<div id="Category">
		<p v-for="(item, index) in arr" :key="index">回到顶部</p>
		<div class="back" v-show="showGoTop" @click="goToTop">back</div>
	</div>
</template>

<script>
	export default {
		name: 'Category',
		data() {
			return {
				arr: [],
				showGoTop: false,
			}
		},
		mounted() {
			for (let index = 0; index < 54; index++) {
				this.arr.push(index)
			}

			// 第一步，绑定一个滚动事件，当滚动的距离达到浏览器窗口的内部高度的时候(大概一个屏幕的高度吧)
			//         就让回到顶部的小盒子显示出来
			window.addEventListener('scroll', this.handleScroll, true) // 这里加上true是为了保证浏览器滚动的及时性
		},
		methods: {
			// 滚动事件的回调函数
			handleScroll() {
				let scrolltop = document.documentElement.scrollTop // 获取当前页面的滚动条纵坐标位置
				console.log('看看滚动了多高的距离', scrolltop)
				if (scrolltop > window.innerHeight) {
					// 浏览器窗口的内部高度 window.innerHeight
					this.showGoTop = true // 超过就显示出来
				} else {
					this.showGoTop = false // 不超过还藏起来
				}
			},
			// 第二步，当用户点击回到顶部小盒子的时候，仍然获取所在的页面的滚动条纵坐标位置,
			//         使用定时器让页面滚动条的坐标位置递减，这样就能实现平滑过渡的效果
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
		},
	}
</script>

<style>
	p {
		margin-bottom: 30px;
	}
	.back {
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #abf;
		position: fixed;
		right: 100px;
		bottom: 100px;
		cursor: pointer;
	}
</style>