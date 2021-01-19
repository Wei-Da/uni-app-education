<template>
	<view class="mine">
		<view class="mine-header">
			<image class="mine-header_img" src="../../static/images/background-img-mine-header.png" mode="widthFix"></image>
			<view class="mine-header_content">
				<view class="mine-header_content_left">
					<image class="mine-header_content_left_avatar" src="../../static/images/icon-avatar.png" mode="widthFix"></image>
					<view class="mine-header_content_left_useInfo">
						<view class="username">小鬼萝卜头</view>
						<view class="member_level">
							<image class="member_level_img" src="../../static/images/icon-crown.png" mode="widthFix"></image>
							<text class="member_level_name">普通会员</text>
						</view>
					</view>
				</view>
				<image class="mine-header_content_right_settings" src="../../static/images/icon-settings.png" mode="widthFix"></image>
				<image class="mine-header_content_right_messages" src="../../static/images/icon-message.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="mine-function">
			<navigator class="mine-function-item" url="">
				<image class="mine-function-item_img" src="../../static/images/icon-findTeacher.png" mode="widthFix"></image>
				<view class="">
					找老师
				</view>
			</navigator>
			<navigator class="mine-function-item" url="">
				<image class="mine-function-item_img" src="../../static/images/icon-learnPlan.png" mode="widthFix"></image>
				<view class="">
					学习规划
				</view>
			</navigator>
			<navigator class="mine-function-item" url="">
				<image class="mine-function-item_img" src="../../static/images/icon-reward.png" mode="widthFix"></image>
				<view class="">
					奖励
				</view>
			</navigator>
			<navigator class="mine-function-item" url="">
				<image class="mine-function-item_img" src="../../static/images/icon-points.png" mode="widthFix"></image>
				<view class="">
					积分
				</view>
			</navigator>
		</view>
		<view class="collect-follow">
			<view class="collect-follow-item br">
				<text class="mr-36">收藏</text>
				<text>88</text>
			</view>
			<view class="collect-follow-item">
				<text class="mr-36">关注</text>
				<text>10</text>
			</view>
		</view>
		<view class="mine-line"></view>
		<view class="mine-list">
			<navigator :url="item.url" class="mine-list-item" v-for="(item, index) in mineLists" :key="index">
				<view class="mine-list-item_left">
					<image class="mine-list-item_left_img" :src="item.imgSrc" mode="widthFix"></image>
					<text class="mine-list-item_left_name">{{ item.name }}</text>
				</view>
				<view class="">
					>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mineLists: [
					{
						url: '',
						imgSrc: '../../static/images/icon-orders.png',
						name: '我的订单'
					},
					{
						url: '',
						imgSrc: '../../static/images/icon-coupons.png',
						name: '我的优惠券'
					},
					{
						url: '',
						imgSrc: '../../static/images/icon-courses.png',
						name: '我的课程'
					},
					{
						url: '',
						imgSrc: '../../static/images/icon-quiz.png',
						name: '我的提问'
					},
					{
						url: '',
						imgSrc: '../../static/images/icon-advices.png',
						name: '意见与反馈'
					},
					{
						url: '',
						imgSrc: '../../static/images/icon-address.png',
						name: '地址管理'
					},
				]
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
				display: flex;
				align-items: center;
				position: absolute;
				left: 3.7%;
				right: 7.2%;
				top: 50%;
				transform: translate(0, -50%);

				.mine-header_content_left {
					display: flex;

					.mine-header_content_left_avatar {
						width: 102rpx;
						height: 102rpx;
						margin-right: 24rpx;
					}

					@media screen and (min-width:768px) {
						.mine-header_content_left_avatar {
							width: 102px;
							height: 102px;
							margin-right: 24px;
						}
					}

					.mine-header_content_left_useInfo {
						display: flex;
						flex-direction: column;
						justify-content: center;
						color: #FFFFFF;

						.username {
							font-size: 24rpx;
							margin-bottom: 12rpx;
						}

						@media screen and (min-width:768px) {
							.username {
								font-size: 24px;
								margin-bottom: 12px;
							}
						}

						.member_level {
							background: #916cdf;
							border-radius: 20rpx;
							text-align: center;

							.member_level_img {
								vertical-align: middle;
								width: 20rpx;
								height: 16rpx;
								margin-right: 3px;
							}

							.member_level_name {
								vertical-align: middle;
								font-size: 16rpx;
							}
						}

						@media screen and (min-width:768px) {
							.member_level {
								border-radius: 20px;
								padding: 7px;
								
								.member_level_img {
									width: 20px;
									height: 16px;
									margin-right: 3px;
								}

								.member_level_name {
									font-size: 16px;
								}
							}
						}
					}
				}

				.mine-header_content_right_settings {
					width: 30rpx;
					margin-left: auto;
				}

				.mine-header_content_right_messages {
					width: 30rpx;
					margin-left: 14rpx;
				}

				@media screen and (min-width:768px) {
					.mine-header_content_right_settings {
						width: 30px;
						margin-left: auto;
					}

					.mine-header_content_right_messages {
						width: 30px;
						margin-left: 14px;
					}
				}
			}
		}
		
		.mine-function {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 138rpx;
			border-bottom: 1px solid #dadada;
			
			.mine-function-item {
				width: 25%;
				text-align: center;
				
				.mine-function-item_img {
					width: 32rpx;
					height: 38rpx;
				}
			}
		}
		
		@media screen and (min-width:768px) {
			.mine-function {
				height: 138px;
				
				.mine-function-item {
					
					.mine-function-item_img {
						width: 32px;
						height: 38px;
					}
				}
			}
		}
		
		.collect-follow {
			display: flex;
			
			.collect-follow-item {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50%;
				height: 82rpx;
				font-size: 20rpx;
				
				.mr-36 {
					margin-right: 36rpx;
				}
			}
			
			@media screen and (min-width:768px) {
				.collect-follow-item {
					height: 82px;
					font-size: 20px;
					
					.mr-36 {
						margin-right: 36px;
					}
				}
			}
			
			.br {
				border-right: 1px solid #dadada;
			}
		}
		
		.mine-line {
			width: 100%;
			height: 14rpx;
			background: #f5f5f5;
		}
		
		.mine-list {
			display: flex;
			flex-direction: column;
			width: 100%;
			
			.mine-list-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 28rpx 0 46rpx;
				width: 100%;
				height: 80rpx;
				
				.mine-list-item_left_img {
					margin-right: 20rpx;
					vertical-align: middle;
					width: 32rpx;
				}
				
				.mine-list-item_left_name {
					vertical-align: middle;
					font-size: 22rpx;
				}
			}
			
			@media screen and (min-width:768px) {
				.mine-list-item {
					height: 80px;
					padding: 0 28px 0 46px;

					.mine-list-item_left_img {
						margin-right: 20px;
						width: 32px;
					}
					
					.mine-list-item_left_name {
						font-size: 22px;
					}
				}
			}
		}
	}
</style>
