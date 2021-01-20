<template>
	<view class="star-teacher">
		<!-- #ifdef H5 -->
		<uni-nav-bar left-icon="back" left-text="返回" title="明星老师" @clickLeft="goBack"></uni-nav-bar>
		<!-- #endif -->
		<view class="star-teacher-content">
			<view class="course_header mb-26">
				<view class="course_header_title">
					悄悄关注
				</view>
			</view>
			<view class="star-teacher-follow line">
				<view class="star-teacher-follow-item" v-for="(item, index) in starTeacherList" :key="index">
					<image class="star-teacher-follow-bg" :src="item.bgSrc" mode="widthFix"></image>
					<view class="content">
						<view class="star-teacher-follow-title text-ellipsis fs-18">
							{{ item.teacherName }}
						</view>
						<view class="star-teacher-follow-describe text-ellipsis">
							{{ item.motto }}
						</view>
						<image class="star-teacher-follow-avatar w-56" :src="item.avatarSrc" mode="widthFix"></image>
						<view class="star-teacher-follow-btn">
							<image class="star-teacher-follow-btn-img w-16" src="../../static/images/icon-starTeacher-follow.png" mode="widthFix"></image>
							<text class="star-teacher-follow-btn-text fs-14">关注</text>
						</view>
					</view>
				</view>
			</view>
			<view class="course_header mb-26">
				<view class="course_header_title">
					经验总结
				</view>
			</view>
			<post class="line"></post>
			<view class="course_header mb-26">
				<view class="course_header_title">
					教程分享
				</view>
			</view>
			<post class="line"></post>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starTeacherList: [
					{
						teacherName: '柚子老师',
						motto: '坚持自己的选择永不言弃',
						bgSrc: '../../static/images/bg-starTeacher-blue.png',
						avatarSrc: '../../static/images/icon-starTeahcer-blue.png'
					},
					{
						teacherName: '柚子老师',
						motto: '坚持自己的选择永不言弃',
						bgSrc: '../../static/images/bg-starTeacher-red.png',
						avatarSrc: '../../static/images/icon-starTeacher-red.png'
					},
					{
						teacherName: '柚子老师',
						motto: '坚持自己的选择永不言弃',
						bgSrc: '../../static/images/bg-starTeacher-yellow.png',
						avatarSrc: '../../static/images/icon-starTeacher-yellow.png',
					},
				]
			};
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss">
	.star-teacher {
		position: relative;

		.star-teacher-content {
			position: absolute;
			left: 3.6%;
			right: 3.6%;
			margin-top: 50rpx;

			.mb-26 {
				margin-bottom: 26rpx;
			}

			.star-teacher-follow {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 100%;

				.star-teacher-follow-item {
					position: relative;
					width: 32%;
					text-align: center;
					color: #FFFFFF;
					
					.content {
						padding: 24rpx 0;
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
					
					.star-teacher-follow-bg {
						width: 100%;
					}

					.star-teacher-follow-title {
						width: 100%;
					}
					
					.star-teacher-follow-describe {
						margin-top: 14rpx;
						width: 100%;
						font-size: 16rpx;
					}
					
					@media screen and (min-width:768px) {
						.star-teacher-follow-describe {
							font-size: 28rpx;
						}
					}
					
					.star-teacher-follow-avatar {
						margin-top: 18rpx;
					}
					
					.star-teacher-follow-btn {
						width: 100%;
						
						.star-teacher-follow-btn-img {
							vertical-align: middle;
							margin-right: 6rpx;
						}
						
						.star-teacher-follow-btn-text {
							vertical-align: middle;
						}
					}
				}
			}
		}
	}
</style>
