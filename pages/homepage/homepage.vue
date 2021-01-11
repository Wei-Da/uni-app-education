<template>
	<view class="homepage">
		<view class="header">
			<view class="header_city">南京</view>
			<input class="header_search_input" confirm-type="search" placeholder="搜索课程老师等关键字" placeholder-style="color:#b3b3b3" />
		</view>
		<view class="banner">
			<image class="banner_img" src="../../static/images/banner.png" mode="widthFix"></image>
			<view class="nav_list">
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_popular.png" mode="widthFix"></image>
					<text class="nav_item_title">热门</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_free.png" mode="widthFix"></image>
					<text class="nav_item_title">免费</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_course.png" mode="widthFix"></image>
					<text class="nav_item_title">教程</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_classify.png" mode="widthFix"></image>
					<text class="nav_item_title">分类</text>
				</navigator>
			</view>
		</view>
		<view class="content-wrap">
			<view class="card">
				<navigator url="" class="card_item">
					<image src="../../static/images/card-top-teacher.png" mode="widthFix"></image>
				</navigator>
				<navigator url="" class="card_item">
					<image src="../../static/images/card-intensive-course.png" mode="widthFix"></image>
				</navigator>
				<navigator url="" class="card_item">
					<image src="../../static/images/card-traning.png" mode="widthFix"></image>
				</navigator>
			</view>
			<view class="course">
				<view class="course_header">
					<view class="course_header_title">
						直播课程
					</view>
					<navigator class="course_header_more" url="">更多></navigator>
				</view>
				<view class="course_live">
					<navigator class="course_live_item" url="">
						<view class="course_live_item_img">
							<image src="../../static/images/live-background-img.png" mode="widthFix"></image>
							<view class="icon_live"></view>
							<view class="live_describe">
								<text class="live_describe_title">UI设计</text>
								<text class="live_describe_content">科技性素材设计方法</text>
							</view>
						</view>
						<view class="course_live_item_text text_overflow">【公开课】2020年UI设计之路</view>
					</navigator>
					<navigator class="course_live_item" url="">
						<view class="course_live_item_img">
							<image src="../../static/images/live-background-img.png" mode="widthFix"></image>
							<view class="icon_live"></view>
							<view class="live_describe">
								<text class="live_describe_title">UI设计</text>
								<text class="live_describe_content">科技性素材设计方法</text>
							</view>
						</view>
						<view class="course_live_item_text text_overflow">【公开课】2020年UI设计之路</view>
					</navigator>
				</view>
			</view>
			<view class="recommend">
				<view class="course_header">
					<view class="course_header_title">
						推荐课程
					</view>
					<navigator class="course_header_more" url="">更多></navigator>
				</view>
				<view class="recommend_content">
					<image class="recommend_content_img" src="../../static/images/Pr.png" mode="widthFix"></image>
					<view class="recommend_content_right">
						<view>
							<view class="recommend_content_right_title">
								零基础入门Premiere
							</view>
							<view class="recommend_content_right_describe text_overflow">
								全年爆款，快速提升软件能力，从此不加班
							</view>
						</view>
						<view class="recommend_content_right_info">
							<view class="author_info">
								<image class="author_icon" src="../../static/images/author-icon.png" mode="widthFix"></image>
								<text class="author">小米老师</text>
							</view>
							<view class="price">￥324</view>
						</view>
					</view>
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
	.homepage {
		position: relative;

		.header {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			margin-bottom: 20rpx;

			.header_city {
				width: 20%;
				text-align: center;
			}

			.header_search_input {
				width: 75%;
				height: 54rpx;
				background-color: #f5f5f5;
				border: 1px solid #f5f5f5;
				border-radius: 10px;
			}
		}

		.banner {
			position: relative;
			width: 100%;
			// height: 287rpx;
			margin-bottom: 92rpx;

			.banner_img {
				width: 100%;
				height: 100%;
			}

			.nav_list {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				left: 3.6%;
				right: 3.6%;
				bottom: -70rpx;
				// height: 126rpx;
				padding: 16rpx 0;
				background-color: #FFFFFF;
				border-radius: 5px;

				.nav_item {
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;

					image {
						width: 37.93%;
						margin-bottom: 8rpx;
						// height: 66rpx;
					}

					.nav_item_title {
						font-size: 14px;
					}
				}
			}
		}

		.content-wrap {
			position: absolute;
			left: 3.6%;
			right: 3.6%;

			.card {
				display: flex;
				justify-content: space-between;
				width: 100%;
				border-bottom: 15rpx solid #f5f5f5;
				margin-bottom: 26rpx;
				padding-bottom: 26rpx;

				.card_item {
					width: 31.89%;

					image {
						width: 100%;
					}
				}
			}

			.course_header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 26rpx;

				.course_header_title {
					font-size: 16px;
				}

				@media screen and (min-width:768px) {
					.course_header_title {
						font-size: 22px;
					}
				}

				.course_header_more {
					font-size: 10px;
					color: #999999;
				}

				@media screen and (min-width:768px) {
					.course_header_more {
						font-size: 14px;
					}
				}
			}

			.course {
				width: 100%;
				border-bottom: 15rpx solid #f5f5f5;
				margin-bottom: 26rpx;
				padding-bottom: 26rpx;

				.course_live {
					width: 100%;
					display: flex;
					justify-content: space-between;

					.course_live_item {
						width: 47.98%;

						.course_live_item_img {
							position: relative;
							width: 100%;
							// height: 160rpx;

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
					}
				}
			}

			.recommend {

				.recommend_content {
					display: flex;

					.recommend_content_img {
						width: 43.96%;
					}

					.recommend_content_right {
						width: 56.04%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						padding: 20rpx 16rpx 8rpx;

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
			}
		}
	}
</style>
