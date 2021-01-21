<template>
	<view class="header">
		<uni-nav-bar>
			<view class="header_search">
				<input class="header_search_input" confirm-type="search" placeholder="搜索课程老师等关键字" placeholder-style="color:#b3b3b3; font-size:22rpx;" />
				<uni-icons class="icon_search" type="search" size="26rpx"></uni-icons>
			</view>
			<view class="header_search_left" slot="left">
				<uni-icons class="" type="location-filled" size="13"></uni-icons>
				<text class="header_city">南京</text>
			</view>
			<view slot="right">
				<uni-icons type="scan"></uni-icons>
			</view>
		</uni-nav-bar>
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
	.header {
		width: 92.8%;
		height: 100%;
		margin: 0 auto;

		/deep/.uni-navbar--border {
			border-bottom-style: none;
		}

		.header_city {
			font-size: 26rpx;
		}

		.header_search {
			position: relative;
			width: 100%;

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
				top: 0;
				left: 24rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		
		.header_search_left {
			display: flex;
			align-items: center;
		}
	}
</style>
