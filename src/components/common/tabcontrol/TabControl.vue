<template>
	<div class="tab-control">
		<div
			class="tab-control-item"
			v-for="(item, index) in titles"
			:key="index"
			@click="tabClick(index)"
			:class="{ active: index == currentIndex }"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
			},
		},
		methods: {
			tabClick(index) {
				this.currentIndex = index
				this.$emit('tabClick', index)
			},
		},
		data() {
			return { currentIndex: 0 }
		},
	}
</script>

<style lang="less" scoped>
	.tab-control {
		display: flex;
		text-align: center;
		font-size: 15px;
		line-height: 40px;
		.tab-control-item {
			flex: 1;
			span {
				padding: 5px;
			}
		}
		.active {
			color: var(--color-high-text);
			span {
				border-bottom: 3px solid var(--color-tint);
			}
		}
	}
</style>