<template>
	<div class="wrapper1" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	// 引入better-scroll插件
	import BScroll from 'better-scroll'
	export default {
		name: 'Scroll',
		data() {
			return {
				scroll: null,
			}
		},
		props: {
			probeType: {
				type: Number,
				default: 0,
			},
			pullUpload: {
				type: Boolean,
				default: false,
			},
		},
		mounted() {
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.wrapper, {
						probeType: 3,
					})
					// console.log(this.scroll)
					this.scroll.on('scroll', (pos) => {
						console.log(pos)
					})
				}
			})
			// this.scroll = new BScroll(this.$refs.wrapperlist, {
			// 	probeType: 3,
			// 	pullUpLoad: true,
			// 	scrollbar: true,
			// })

			// this.scroll.on('enable', () => {
			// 	console.log('enable-------')
			// })
		},
		methods: {
			scrollTop() {
				console.log('scrollTop-------')
				this.scroll.scrollTo(0, 0, 300)
			},
		},
	}
</script>

<style lang="less" scoped>
	// .wrapper1 {
	// 	position: absolute;
	// 	left: 0;
	// 	top: 0;
	// 	overflow: hidden;
	// }
</style>