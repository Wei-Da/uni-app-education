<template>
	<view class="recommend_content">
		<image class="recommend_content_img" :src="courseInfo.imgUrl" mode="widthFix"></image>
		<view class="recommend_content_right">
			<view>
				<view class="recommend_content_right_title">
					{{ courseInfo.title }}
				</view>
				<view class="recommend_content_right_describe text-ellipsis">
					{{ courseInfo.describe }}
				</view>
			</view>
			<view class="recommend_content_right_info">
				<view class="author_info">
					<image class="author_icon" src="../../static/images/author-icon.png" mode="widthFix"></image>
					<text class="author">{{ courseInfo.author }}</text>
				</view>
				<view class="price">￥{{ courseInfo.price }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			courseInfo: Object
		}
	}
</script>

<style lang="scss" scoped>
	.recommend_content {
		display: flex;
		margin-bottom: 20rpx;

		.recommend_content_img {
			width: 43.96%;
		}

		.recommend_content_right {
			width: 56.04%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 16rpx 8rpx;
			border: 1px solid #e0e2e5;

			.recommend_content_right_title {
				font-size: 14px;
			}

			@media screen and (min-width:768px) {
				.recommend_content_right_title {
					font-size: 20px;
				}
			}

			.recommend_content_right_describe {
				width: 100%;
				font-size: 10px;
				color: #999999;
			}

			@media screen and (min-width:768px) {
				.recommend_content_right_describe {
					width: 100%;
					font-size: 14px;
				}
			}

			.recommend_content_right_info {
				display: flex;
				justify-content: space-between;
				align-items: center;

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
				}

				.price {
					font-size: 14px;
					color: #fc4e0a;
				}
			}
		}
	}
</style>
