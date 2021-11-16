<template>
	<nav-bar>
		<div slot="left" class="back" @click="backClick">
			<img src="@/assets/img/common/back.svg" alt="" />
		</div>
		<div slot="center" id="title">
			<div
				v-for="(item, index) in title"
				class="title-item"
				:class="{ active: currentIndex == index }"
				:key="index"
				@click="titleItemClick(index)"
			>
				{{ item }}
			</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'

	export default {
		components: { NavBar },
		data() {
			return {
				title: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0,
			}
		},
		methods: {
			backClick() {
				this.$router.go(-1)
			},
			titleItemClick(index) {
				this.currentIndex = index
			},
		},
	}
</script>

<style lang="less" scoped>
	#title {
		display: flex;
		color: #333;
	}
	.title-item {
		flex: 1;
		font-size: 14px;
	}
	.back img {
		margin-left: 5px;
		width: 30px;
	}
	.active {
		color: var(--color-high-text);
	}
</style>