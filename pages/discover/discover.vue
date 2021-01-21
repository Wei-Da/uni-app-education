<template>
	<view class="discover">
		<search class="h-100"></search>
		<view class="discover_content">
			<view class="line">
				<image class="discover_banner" src="../../static/images/discover-banner.png" mode="widthFix"></image>
			</view>
			<view class="course_header">
				<view class="course_header_title">
					每日必学
				</view>
				<navigator class="course_header_more" url="">更多></navigator>
			</view>
			<navigator class="daily_learn line">
				<image class="daily_learn_img" src="../../static/images/video-img.png" mode="widthFix"></image>
				<image class="icon-play" src="../../static/images/icon-play.png" mode="widthFix"></image>
				<view class="daily_learn_info">
					<view class="">
						玩转炫酷素材设计方法总结
					</view>
					<image class="daily_learn_video_views" src="../../static/images/icon-video-views.png" mode="widthFix"></image>
					<text class="daily_learn_video_viewsNum">623</text>
				</view>
			</navigator>
			<view class="course_header">
				<view class="course_header_title">
					全部课程
				</view>
				<navigator class="course_header_more" url="">更多></navigator>
			</view>
			<navigator v-for="(item, index) in courseItems" :url="item.url" :key="item.id">
				<course-item :courseInfo="item.courseInfo"></course-item>
			</navigator>
		<view class="window-bottom"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				courseItems: [
					{
						id: 1,
						url: '',
						courseInfo: {
							imgUrl: '../../static/images/ui-course-blue.png',
							title: 'UI运营设计训练营（第1期）',
							describe: '全年爆款，快速提升软件能力，从此不加班',
							author: '绵绵羊',
							authorImg: '../../static/images/author-icon.png',
							price: '245'
						}
					},
					{
						id: 2,
						url: '',
						courseInfo: {
							imgUrl: '../../static/images/ui-course-cyan.png',
							title: 'UI运营设计训练营（第1期）',
							describe: '全年爆款，快速提升软件能力，从此不加班',
							author: '小绵老师',
							authorImg: '../../static/images/author-icon.png',
							price: '300'
						}
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.discover {
		position: relative;

		.discover_content {
			position: absolute;
			left: 3.6%;
			right: 3.6%;

			.discover_banner {
				width: 100%;
			}
			
			.daily_learn {
				position: relative;
				width: 100%;
				height: 100%;
				
				.daily_learn_img {
					width: 100%;
				}
				
				.icon-play {
					position: absolute;
					left: 50%;
					top: 50%;
					width: 48rpx;
					height: 48rpx;
					transform: translate(-24rpx, -24rpx);
				}
				
				.daily_learn_info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					.daily_learn_video_views {
						width: 22rpx;
						height: 18rpx;
						margin-left: auto;
					}
					
					@media screen and (min-width:768px) {
						.daily_learn_video_views {
							width: 22px;
							height: 18px;
						}
					}
					
					.daily_learn_video_viewsNum {
						margin-left: 10rpx;
					}
				}
			}
		}

	}
</style>
