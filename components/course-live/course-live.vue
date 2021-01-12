<template>
	<view>
		<view class="course_live_item_img">
			<image :src="liveInfo.imageUrl" mode="widthFix"></image>
			<view class="icon_live"></view>
			<view class="live_describe">
				<text v-if="liveInfo.sort" class="live_describe_title">{{ liveInfo.sort }}</text>
				<text class="live_describe_content">{{ liveInfo.describe }}</text>
			</view>
		</view>
		<view class="course_live_item_text text_overflow">{{ liveInfo.title }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			liveInfo: Object
		}
	}
</script>

<style lang="scss" scoped>
	.course_live_item_img {
		position: relative;
		width: 100%;

		image {
			width: 100%;
			height: 100%;
		}

		.icon_live {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-12px, -12px);
			width: 24px;
			height: 24px;
			background: url('../../static/images/icon-live.gif');
		}

		.live_describe {
			position: absolute;
			left: 16rpx;
			bottom: 10%;
			color: #FFFFFF;
			font-size: 10px;

			.live_describe_title {
				margin-right: 4px;
				padding: 2rpx 6rpx;
				background: #a163f0;
				border-radius: 10px;
			}
		}

		@media screen and (min-width:768px) {
			.live_describe {
				font-size: 14px;
			}
		}
	}

	.course_live_item_text {
		width: 100%;
		font-size: 12px;
	}

	@media screen and (min-width:768px) {
		.course_live_item_text {
			width: 100%;
			font-size: 16px;
		}
	}
</style>
