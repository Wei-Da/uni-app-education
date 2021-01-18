<template>
	<view class="homepage">
		<view class="header">
			<view class="header_city">南京</view>
			<view class="header_search">
				<input class="header_search_input" confirm-type="search" placeholder="搜索课程老师等关键字" placeholder-style="color:#b3b3b3; font-size:22rpx;" />
				<icon class="icon_search" type="search" size="26rpx"></icon>
			</view>
		</view>
		<view class="banner">
			<image class="banner_img" src="../../static/images/banner.png" mode="widthFix"></image>
			<view class="nav_list">
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav-popular.png" mode="widthFix"></image>
					<text class="nav_item_title">热门</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav-free.png" mode="widthFix"></image>
					<text class="nav_item_title">免费</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav-course.png" mode="widthFix"></image>
					<text class="nav_item_title">教程</text>
				</navigator>
				<navigator url="" class="nav_item">
					<image src="../../static/images/nav-classify.png" mode="widthFix"></image>
					<text class="nav_item_title">分类</text>
				</navigator>
			</view>
		</view>
		<view class="content-wrap">
			<view class="card line">
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
			<view class="course line">
				<view class="course_header">
					<view class="course_header_title">
						直播课程
					</view>
					<navigator class="course_header_more" url="">更多></navigator>
				</view>
				<view class="course_live">
					<navigator v-for="(item, index) in courseLives" class="course_live_item" :url="item.url" :key="item.id">
						<course-live :liveInfo="item.liveInfo"></course-live>
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
				<navigator v-for="(item, index) in courseItems" :url="item.url" :key="item.id">
					<course-item :courseInfo="item.courseInfo"></course-item>
				</navigator>
			</view>
			<view class="window-bottom"></view>
		</view>
	</view>
</template>

<script>
	import courseLive from '../../components/course-live/course-live.vue'
	import courseItem from '../../components/course-item/course-item.vue'

	export default {
		data() {
			return {
				courseLives: [{
						id: 1,
						url: '',
						liveInfo: {
							sort: 'PS',
							describe: '学习PS',
							title: '【公开课】2020年PS设计之路',
							imageUrl: '../../static/images/live-background-img.png'
						}
					},
					{
						id: 2,
						url: '',
						liveInfo: {
							sort: 'UI设计',
							describe: '科技性素材设计方法',
							title: '【公开课】2020年UI设计之路',
							imageUrl: '../../static/images/live-background-img.png'
						}
					}
				],
				courseItems: [
					{
						id: 1,
						url: '',
						courseInfo: {
							imgUrl: '../../static/images/Pr.png',
							title: '零基础入门Premiere',
							describe: '全年爆款，快速提升软件能力，从此不加班',
							author: '小米老师',
							price: '324',
							authorImg: '../../static/images/author-icon.png'
						}
					},
					{
						id: 2,
						url: '',
						courseInfo: {
							imgUrl: '../../static/images/Pr.png',
							title: '零基础入门PS',
							describe: '全年爆款，快速提升软件能力，从此不加班',
							author: '小绵老师',
							price: '300',
							authorImg: '../../static/images/author-icon.png'
						}
					},
				]
			};
		},
		components: {
			courseLive,
			courseItem
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
			margin-top: 18px;
			margin-bottom: 18px;

			.header_city {
				width: 20%;
				text-align: center;
			}

			.header_search {
				position: relative;
				width: 75%;
				
				.header_search_input {
					width: 100%;
					height: 54rpx;
					padding-left: 56rpx;
					background-color: #f5f5f5;
					border: 1px solid #f5f5f5;
					border-radius: 10px;
				}
				
				.icon_search {
					position: absolute;
					top: 14rpx;
					left: 24rpx;
				}
			}
		}

		.banner {
			position: relative;
			width: 100%;
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
				padding: 16rpx 0;
				background-color: #FFFFFF;
				border-radius: 5px;
				box-shadow: 0 10px 5px #F8F8F8;

				.nav_item {
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;

					image {
						width: 37.93%;
						margin-bottom: 8rpx;
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
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;

				.card_item {
					width: 31.89%;

					image {
						width: 100%;
					}
				}
			}

			// .course_header {
			// 	display: flex;
			// 	justify-content: space-between;
			// 	align-items: center;
			// 	margin-bottom: 26rpx;

			// 	.course_header_title {
			// 		font-size: 16px;
			// 	}

			// 	@media screen and (min-width:768px) {
			// 		.course_header_title {
			// 			font-size: 22px;
			// 		}
			// 	}

			// 	.course_header_more {
			// 		font-size: 10px;
			// 		color: #999999;
			// 	}

			// 	@media screen and (min-width:768px) {
			// 		.course_header_more {
			// 			font-size: 14px;
			// 		}
			// 	}
			// }

			.course {
				width: 100%;

				.course_live {
					width: 100%;
					display: flex;
					justify-content: space-between;

					.course_live_item {
						width: 47.98%;
					}
				}
			}
		}
		
	}
</style>
