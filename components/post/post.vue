<template>
	<view class="post">
		<image class="post-img" src="../../static/images/bg-post.png" mode="widthFix"></image>
		<view class="post-title">
			关于那些博人眼球的经验技巧
		</view>
		<view class="post-describe mb-16">
			这是一篇关于AI变换知识总结的一门技巧，通过AI变换功能，可以把简单的图形变得高大上有没有,快来 围观老师是怎么做的吧
		</view>
		<view class="post-bottom">
			<view>
				<image class="icon-views mr-6 va-m" src="../../static/images/icon-video-views.png" mode="widthFix"></image>
				<text class="va-m fs-14">248</text>
			</view>
			<view>
				<text class="va-m mr-6 fs-14">2020-11-18</text>
				<text class="va-m fs-14">2小时前</text>
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
	.post {
		width: 100%;
		
		.fs-14 {
			font-size: 14px;
		}
		
		.post-img {
			width: 100%;
		}
		
		.post-title {
			font-size: 18px;
		}
		
		.post-describe {
			font-size: 14px;
			color: #999999;
		}
		
		.post-bottom {
			display: flex;
			justify-content: space-between;
			
			.icon-views {
				width: 20px;
			}
			
			.mr-6 {
				margin-right: 6px;
			}
		}
	}
</style>
