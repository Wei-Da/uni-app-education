<template>
	<view class="homepage">
		<view class="header">
			<view class="header_city">南京</view>
			<input class="header_search_input" confirm-type="search" placeholder="搜索课程老师等关键字" placeholder-style="color:#b3b3b3" />
		</view>
		<view class="banner">
			<image class="banner_img" src="../../static/images/banner.png" mode="scaleToFill"></image>
			<view class="nav_list">
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_popular.png" mode="scaleToFill"></image>
					<text>热门</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_free.png" mode="scaleToFill"></image>
					<text>免费</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_course.png" mode="scaleToFill"></image>
					<text>教程</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav_classify.png" mode="scaleToFill"></image>
					<text>分类</text>
				</navigator>
			</view>
		</view>
		<view class="content-wrap">
			<view class="card">
				<navigator url="" class="card_item">
					<image src="../../static/images/card-top-teacher.png" mode="scaleToFill"></image>
				</navigator>
				<navigator url="" class="card_item">
					<image src="../../static/images/card-intensive-course.png" mode="scaleToFill"></image>
				</navigator>
				<navigator url="" class="card_item">
					<image src="../../static/images/card-traning.png" mode="scaleToFill"></image>
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
							<image src="../../static/images/live-background-img.png" mode="scaleToFill"></image>
							<view class="icon_live"></view>
							<view class="live_describe">
								<text class="live_describe_title">UI设计</text>
								<text class="live_describe_content">科技性素材设计方法</text>
							</view>
						</view>
						<text class="course_live_item_text">【公开课】</text>
					</navigator>
					<navigator class="course_live_item" url="">
						<view class="course_live_item_img">
							<image src="../../static/images/live-background-img.png" mode="scaleToFill"></image>
							<view class="icon-live"></view>
						</view>
						<text class="course_live_item_text">【公开课】</text>
					</navigator>
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
			height: 287rpx;
			margin-bottom: 92rpx;

			.banner_img {
				width: 100%;
				height: 100%;
			}

			.nav_list {
				display: flex;
				justify-content: space-around;
				align-items: center;
				position: absolute;
				left: 50%;
				transform: translate(-348rpx, 0);
				top: 223rpx;
				width: 696rpx;
				height: 126rpx;
				background-color: #FFFFFF;
				border-radius: 5px;

				.nav_item {
					display: flex;
					flex-direction: column;
					text-align: center;
					// width: 66rpx;
					// height: 100%;

					image {
						width: 66rpx;
						height: 66rpx;
					}

					text {
						font-size: 22rpx;
					}
				}
			}
		}

		.content-wrap {
			width: 696rpx;
			margin: 0 auto;

			.card {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 150rpx;
				border-bottom: 15rpx solid #f5f5f5;
				margin-bottom: 26rpx;

				.card_item {
					height: 124rpx;

					image {
						width: 222rpx;
						height: 124rpx;
					}
				}
			}

			.course {
				width: 100%;

				.course_header {
					display: flex;
					justify-content: space-between;
					margin-bottom: 26rpx;

					.course_header_title {
						font-size: 22rpx;
					}

					.course_header_more {
						font-size: 22rpx;
						color: #999999;
					}
				}
				
				.course_live {
					display: flex;
					justify-content: space-between;
					
					.course_live_item {
						width: 334rpx;
						
						.course_live_item_img {
							position: relative;
							width: 334rpx;
							height: 160rpx;
							
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
								bottom: 16px;
							}
						}
					}
				}
			}
		}

	}
</style>
