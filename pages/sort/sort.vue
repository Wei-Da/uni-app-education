<template>
	<view class="sort">
		<!-- #ifdef H5 -->
		<uni-nav-bar left-icon="back" left-text="返回" title="分类" @clickLeft="goBack"></uni-nav-bar>
		<!-- #endif -->
		<view class="sort-tabs">
			<view class="sort-tabs-list">
				<view class="sort-tabs-list-item" @click="changeLeftLength(0, '0%')">UI</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(1, '14%')">绘画</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(2, '28%')">前端</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(3, '42%')">后台</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(4, '56%')">影视</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(5, '70%')">摄影</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(6, '84%')">架构</view>
			</view>
			<view class="tabs_underline" :style="{left: leftLenght}">
				<view style="" class="tabs_underline_content"></view>
			</view>
		</view>
		<view class="sort-odds">
			<text :class="{'odd-active' : oddIndex === 0}" class="odd-item" @click="changeOdd(0)">综合排序</text>
			<text :class="{'odd-active' : oddIndex === 1}" class="odd-item" @click="changeOdd(1)">热度</text>
			<text :class="{'odd-active' : oddIndex === 2}" class="odd-item" @click="changeOdd(2)">销量</text>
			<text :class="{'odd-active' : oddIndex === 3}" class="odd-item" @click="changeOdd(3)">价格</text>
		</view>
		<navigator v-for="(item, index) in courseItems" :url="item.url" :key="item.id">
			<course-item :courseInfo="item.courseInfo"></course-item>
		</navigator>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				tabIndex: 0,
				oddIndex: 0,
				leftLenght: '0%',
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
					{
						id: 3,
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
						id: 4,
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
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeLeftLength(index, length) {
				this.tabIndex = index
				this.leftLenght = length;
			},
			changeOdd(index) {
				this.oddIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sort {

		.sort-tabs {
			position: relative;
			margin: 50rpx 0;
			width: 100%;

			.sort-tabs-list {
				width: 100%;
				display: flex;

				.sort-tabs-list-item {
					width: 14%;
					text-align: center;
				}
			}

			.tabs_underline {
				position: absolute;
				width: 14%;
				transition: all 300ms;

				.tabs_underline_content {
					height: 5px;
					width: 26px;
					margin: 0 auto;
					background: #5f2ec5;
				}
			}
		}

		.sort-odds {
			display: flex;
			justify-content: space-between;
			margin-bottom: 26rpx;
			
			.odd-item {
				width: 25%;
				text-align: center;
			}
			
			.odd-active {
				color: #5f2ec5;
			}
		}
	}
</style>
