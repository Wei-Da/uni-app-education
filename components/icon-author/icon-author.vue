<template>
	<view class="author_info">
		<image class="author_icon" :src="authorImg" mode="widthFix"></image>
		<text class="author">{{ author }}</text>
	</view>
</template>

<script>
	export default {
		props: {
			author: String,
			authorImg: String
		}
	}
</script>

<style lang="scss" scoped>
	.author_info {
		display: flex;
		align-items: center;

		.author_icon {
			width: 20px;
			margin-right: 8rpx;
		}

		.author {
			font-size: 10px;
		}
		
		@media screen and (min-width:768px) {
			.author {
				font-size: 14px;
			}
		}
	}
</style>
