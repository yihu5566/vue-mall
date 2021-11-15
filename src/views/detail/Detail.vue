<template>
	<div class="detail">
		<detail-nav-bar class="detail-nav-bar" />
	</div>
</template>

<script>
	import DetailNavBar from '@/views/detail/childComponents/DetailNavBar.vue'
	import { getDetail } from '@/network/detail'
	export default {
		name: 'Detail',
		components: { DetailNavBar },
		data() {
			return {
				iid: '',
			}
		},
		created() {
			this.iid = this.$route.params.iid
			console.log(this.iid)
			getDetail(this.iid).then((res) => {
				console.log(res)
				// const data = res.result
			})
		},
	}
</script>

<style lang="less" scoped>
	.detail-nav-bar {
		width: 100%;
	}
	.detail {
		background-color: aquamarine;
	}
</style>