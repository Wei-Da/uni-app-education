<template>
	<view class="sort">
		<!-- #ifdef H5 -->
		<uni-nav-bar left-icon="back" left-text="返回" title="分类" @clickLeft="goBack"></uni-nav-bar>
		<!-- #endif -->
		<view class="sort-tabs">
			<view class="sort-tabs-list">
				<view class="sort-tabs-list-item" @click="changeLeftLength(0, '0%', 'ui')">UI</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(1, '14%', 'design')">设计</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(2, '28%')">前端</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(3, '42%')">后台</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(4, '56%', 'film')">影视</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(5, '70%')">摄影</view>
				<view class="sort-tabs-list-item" @click="changeLeftLength(6, '84%')">架构</view>
			</view>
			<view class="tabs_underline" :style="{left: leftLenght}">
				<view style="" class="tabs_underline_content"></view>
			</view>
		</view>
		<view class="sort-content">
			<view class="sort-odds">
				<text :class="{'odd-active' : oddIndex === 0}" class="odd-item" @click="changeOdd(0)">综合排序</text>
				<text :class="{'odd-active' : oddIndex === 2}" class="odd-item" @click="changeOdd(2)">销量</text>
				<text :class="{'odd-active' : oddIndex === 1}" class="odd-item" @click="changeOdd(1, 'date')">日期 {{ dateSortCode === 1 ? '↑' : '↓' }}</text>
				<text :class="{'odd-active' : oddIndex === 3}" class="odd-item" @click="changeOdd(3, 'price')">价格 {{ priceSortCode === 1 ? '↑' : '↓' }}</text>
			</view>
			<navigator v-for="item in courseList" :key="item._id">
				<course-item :courseInfo="item"></course-item>
			</navigator>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import {
		getCourseByType
	} from '@/api/course.js';

	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				tabIndex: 0,
				oddIndex: 0,
				leftLenght: '0%',
				courseList: [],
				sortType: 'price',
				priceSortCode: 1,
				dateSortCode: 1,
				type: 'ui'
			}
		},
		onLoad() {
			this.getCourseList({
				type: this.type
			})
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},

			changeLeftLength(index, length, type) {
				this.tabIndex = index
				this.leftLenght = length;
				this.type = type
				this.getCourseList({
					type
				})
			},

			changeOdd(index, type) {
				this.oddIndex = index;
				this.sortType = type;
				if(type === 'price') {
					this.changePriceOdd()
				} else if(type === 'date') {
					this.changeDateOdd()
				} else {
					this.getCourseList({
						type: this.type,
					})
				}
			},

			changePriceOdd() {
				this.priceSortCode === 1 ? this.priceSortCode = -1 : this.priceSortCode = 1;
				this.getCourseList({
					type: this.type,
					sortType: this.sortType,
					sort: this.priceSortCode
				})
			},

			changeDateOdd() {
				this.dateSortCode === 1 ? this.dateSortCode = -1 : this.dateSortCode = 1;
				this.getCourseList({
					type: this.type,
					sortType: this.sortType,
					sort: this.dateSortCode
				})
			},

			getCourseList(query) {
				getCourseByType(query).then((res) => {
					this.courseList = res.data;
				})
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

		.sort-content {
			position: absolute;
			left: 3.6%;
			right: 3.6%;

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
	}
</style>
