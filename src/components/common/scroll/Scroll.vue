<template>
	<div class="wrapper" ref="wrapperlist">
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
			this.scroll = new BScroll(this.$refs.wrapperlist, {
				probeType: 3,
				pullUpLoad: true,
				scrollbar: true,
			})

			this.scroll.on('scroll', () => {
				console.log('scroll-------')
			})

			this.scroll.on('enable', () => {
				console.log('enable-------')
			})
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
	.wrapper {
		background-color: red;
	}
</style>