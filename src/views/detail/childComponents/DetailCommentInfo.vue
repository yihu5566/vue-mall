<template>
	<div id="comment-info">
		<div class="info-title">
			<div>用户评价</div>
			<div>更多 <i class="arrow-right"></i></div>
		</div>

		<div class="info-middle">
			<div class="info-logo">
				<img :src="commentInfo.user.avatar" alt="" />
				<span>{{ commentInfo.user.name }}</span>
			</div>
			<div class="info-text">
				<p>{{ commentInfo.content }}</p>
				<div class="info-other">
					<span class="date">{{ commentInfo.created }}</span>
					<span>{{ commentInfo.style }}</span>
				</div>
				<div class="info-p" v-if="commentInfo.explain">
					<p>{{ commentInfo.explain }}</p>
				</div>
				<div class="info-imgs">
					<img
						v-for="(item, index) in commentInfo.images"
						:src="item"
						:key="index"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			commentInfo: {
				type: Object,
				default() {
					return {}
				},
			},
		},
		data() {
			return {}
		},
	}
</script>

<style lang="less" scoped>
	#comment-info {
		margin-left: 15px;
		margin-right: 15px;
		background-color: #fff;
		margin-top: 15px;
		margin-bottom: 15px;
		padding: 0, 8px;
		border-bottom: 5px solid #f2f5f8;
	}
	.info-title {
		display: flex;
		justify-content: space-between;
	}
	.info-title > div:nth-child(2) {
		font-size: 13px;
	}
	.info-middle {
		margin-top: 15px;
	}
	.info-middle .info-logo {
		display: flex;
	}
	.info-middle .info-logo img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.info-middle .info-logo span {
		line-height: 40px;
		margin: 0 5px;
	}
	.info-middle .info-text {
		margin-top: 15px;
	}
	.info-middle .info-text p {
		font-size: 14px;
		color: #777;
		line-height: 1.5;
	}
	.info-middle .info-other {
		font-size: 12px;
		color: #999;
		line-height: 1.5;
		margin-top: 10px;
	}
	.info-middle .info-other .span {
		margin-left: 5px;
	}
	.info-middle .info-p {
		padding: 5px;
		margin-top: 15px;
		background-color: #f0f0f0;
	}
	.info-middle .info-p p {
		padding: 5px;
		margin-top: 15px;
		tab-size: 12px;
		background-color: #999;
	}
	.info-imgs {
		margin-top: 10px;
	}
	.info-imgs img {
		width: 70px;
		height: 70px;
		margin-right: 5px;
	}
</style>