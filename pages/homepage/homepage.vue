<template>
	<view class="homepage">
		<search class="h-100"></search>
		<view class="banner">
			<image class="banner_img" src="../../static/images/banner.png" mode="widthFix"></image>
			<view class="nav_list">
				<navigator url="../../course-list/course-list/course-list" class="nav_item">
					<image src="../../static/images/nav-popular.png" mode="widthFix"></image>
					<text class="nav_item_title">热门</text>
				</navigator>
				<navigator url="../../course-list/course-list/course-list" class="nav_item">
					<image src="../../static/images/nav-free.png" mode="widthFix"></image>
					<text class="nav_item_title">免费</text>
				</navigator>
				<navigator url="../../course-list/course-list/course-list" class="nav_item">
					<image src="../../static/images/nav-course.png" mode="widthFix"></image>
					<text class="nav_item_title">教程</text>
				</navigator>
				<navigator url="../../course-list/course-list/course-list" class="nav_item">
					<image src="../../static/images/nav-classify.png" mode="widthFix"></image>
					<text class="nav_item_title">分类</text>
				</navigator>
			</view>
		</view>
		<view class="content-wrap">
			<view class="card line">
				<navigator url="../../star-teacher/star-teacher/star-teacher" class="card_item">
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
				<navigator v-for="item in courseItems" :key="item._id">
					<course-item :courseInfo="item"></course-item>
				</navigator>
			</view>
			<view class="window-bottom"></view>
		</view>
	</view>
</template>

<script>
	import { getCourse } from '@/api/course.js';

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
				courseItems: []
				// courseItems: [
				// 	{
				// 		id: 1,
				// 		url: '../../course-details/course-details/course-details',
				// 		courseInfo: {
				// 			imgUrl: '../../static/images/Pr.png',
				// 			title: '零基础入门Premiere',
				// 			describe: '全年爆款，快速提升软件能力，从此不加班',
				// 			author: '小米老师',
				// 			price: '324',
				// 			authorImg: '../../static/images/author-icon.png'
				// 		}
				// 	},
				// 	{
				// 		id: 2,
				// 		url: '',
				// 		courseInfo: {
				// 			imgUrl: '../../static/images/Pr.png',
				// 			title: '零基础入门PS',
				// 			describe: '全年爆款，快速提升软件能力，从此不加班',
				// 			author: '小绵老师',
				// 			price: '300',
				// 			authorImg: '../../static/images/author-icon.png'
				// 		}
				// 	},
				// ]
			};
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList() {
				getCourse()
					.then((res) => {
						this.courseItems = res.data;
					})
					.catch((err) => {
						console.log('获取课程列表失败')
						console.log(err)
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.homepage {
		position: relative;

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
