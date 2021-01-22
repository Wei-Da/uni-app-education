<template>
	<view class="course-details">
		<!-- #ifdef H5 -->
		<uni-nav-bar left-icon="back" left-text="返回" title="课程详情" @clickLeft="goBack"></uni-nav-bar>
		<!-- #endif -->
		<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
		 @error="videoErrorCallback" :show-mute-btn="true" controls></video>

		<view class="course-details-content">
			<view class="course-details-title line">
				<view class="space-between">
					<view class="fs-24">
						零基础入门Premiere
					</view>
					<view class="course-details-title-price">
						￥345
					</view>
				</view>
				<view class="space-between">
					<view class="describe">
						全年爆款，快速提升软件能力，从此不加班
					</view>
					<view class="">
						<icon-author author="小米老师" authorImg="../../static/images/author-icon.png"></icon-author>
					</view>
				</view>
			</view>
			<view class="fs-24 line">
				课程详情
			</view>
			<ul class="course-details-info">
				<li>课程介绍</li>
				<view class="describe">
					<p>这是一篇关于AI变换知识总结的一门技巧，通过AI变换功能，可以把简单的图形变得高大上有没有,快来围观老师是怎么做的吧;</p>
					<p>这是一篇关于AI变换知识总结的一门技巧，通过AI变换功能，可以把简单的图形变得高大上有没有,快来围观老师是怎么做的吧;</p>
					<p>这是一篇关于AI变换知识总结的一门技巧，通过AI变换功能，可以把简单的图形变得高大上有没有,快来围观老师是怎么做的吧;</p>
				</view>
				<li>课程目录</li>
				<view class="describe">
					<p>01 公开课：如何增强科技技能与方法论</p>
					<p>02 色彩认知：对于色彩的认知你知道哪些</p>
					<p>03 快速入手：简单易懂</p>
				</view>
			</ul>
			<view class="course-details-payBtn">
				<image class="course-details-payBtn-img" src="../../static/images/bg-pay-btn.png" mode="widthFix"></image>
				<view class="course-details-payBtn-text fs-22">
						立即支付: ￥324.00
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

<style lang="scss" scoped>
	.course-details {

		#myVideo {
			width: 100%;
		}

		.course-details-content {
			position: relative;
			margin: 0 auto;
			width: 92.8%;

			.fs-24 {
				font-size: 24px;
			}

			.describe {
				font-size: 14px;
				color: #999999;
			}

			.course-details-title {

				.space-between {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.course-details-title-price {
					font-size: 20px;
					color: #fc4e0a;
				}
			}

			.course-details-info {

				li {
					font-size: 18px;
					margin-bottom: 16rpx;

					&::marker {
						color: #8234e7;
					}

				}

				p {
					margin-bottom: 26rpx;
					
					&:last-child {
						margin-bottom: 36rpx;
					}
				}
			}
			
			.course-details-payBtn {
				position: relative;
				bottom: 0;
				width: 100%;
				
				.course-details-payBtn-img {
					width: 100%;
				}
				
				.course-details-payBtn-text {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #FFFFFF;
				}
			}
		}
	}
</style>
