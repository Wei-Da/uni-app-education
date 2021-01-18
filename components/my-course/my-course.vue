<template>
	<view class="my-course">
		<image :src="courseInfo.imgSrc" mode="widthFix"></image>
		<view class="my-course-content">
			<view class="my-course-content_title text-ellipsis">
				{{ courseInfo.title }}
			</view>
			<view class="my-course-content_courseInfo">
				<icon-author :author="courseInfo.author" :authorImg="courseInfo.authorImg"></icon-author>
				<view :class="[courseInfo.attendance === '已出勤' ? 'attendance' : 'noAttendance', 'state']">{{ courseInfo.attendance }}</view>
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
	.my-course {
		width: 100%;
		border: 1px solid #e6e7ea;
		
		.my-course-content {
			width: 100%;
			padding: 7rpx 7rpx 9rpx;
			
			.my-course-content_title {
				font-size: 20rpx;
				margin-bottom: 12rpx;
			}
			
			@media screen and (min-width:768px) {
				.my-course-content_title {
					font-size: 32rpx;
					margin-bottom: 24rpx;
				}
			}
			
			.my-course-content_courseInfo {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				
				.state {
					padding: 4rpx 14rpx;
					font-size: 20rpx;
					border-radius: 20rpx;
					color: #FFFFFF;
				}
				
				@media screen and (min-width:768px) {
					.state {
						padding: 4rpx 14rpx;
						font-size: 24rpx;
						border-radius: 20rpx;
						color: #FFFFFF;
					}
				}
				
				.attendance {
					background: #ea585c;
				}
				
				.noAttendance {
					background: #CCCCCC;
				}
			}
		}
	}
</style>
