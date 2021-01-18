<template>
	<view class="mine">
		<view class="mine-header">
			<image class="mine-header_img" src="../../static/images/background-img-mine-header.png" mode="widthFix"></image>
			<view class="mine-header_content">
				<image class="mine-header_content_avatar" src="../../static/images/icon-avatar.png" mode=""></image>
				<view class="">
					<view>小鬼萝卜头</view>
					<view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		width: 100%;
		
		.mine-header {
			position: relative;
			width: 100%;
			
			
			.mine-header_img {
				display: block;
				width: 100%;
			}
			
			.mine-header_content {
				position: absolute;
				left: 3.7%;
				right: 7.2%;
				top: 50%;
				transform: translate(0, -50%);
				
				.mine-header_content_avatar {
					width: 102rpx;
					height: 102rpx;
					margin-right: 24rpx;
				}
			}
		}
	}
</style>
