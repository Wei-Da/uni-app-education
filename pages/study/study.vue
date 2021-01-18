<template>
	<view class="study">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="content">
			<view class="total_hours line">
				<view class="total_hours_item division_line">
					<image class="total_hours_item_img" src="../../static/images/total-study.png" mode="widthFix"></image>
					<view>累计学习：40h</view>
				</view>
				<view class="total_hours_item">
					<image class="total_hours_item_img" src="../../static/images/total-class-hour.png" mode="widthFix"></image>
					<view>累计课时：20节</view>
				</view>
			</view>
			<view class="course_header">
				<view class="course_header_title">
					今日直播课程
				</view>
				<navigator class="course_header_more" url="">更多></navigator>
			</view>
			<view class="course_live line">
				<navigator v-for="(item, index) in courseLives" class="course_live_item" :url="item.url" :key="item.id">
					<course-live :liveInfo="item.liveInfo"></course-live>
				</navigator>
			</view>
			<view class="course_header">
				<view class="course_header_title">
					我的课程
				</view>
			</view>
			<view class="tabs_course_list">
				<view class="tabs_course_list_item" @click="changeLeftLength(0, '0%')">UI</view>
				<view class="tabs_course_list_item" @click="changeLeftLength(1, '25%')">绘画</view>
				<view class="tabs_course_list_item" @click="changeLeftLength(2, '50%')">影视</view>
				<view class="tabs_course_list_item" @click="changeLeftLength(3, '75%')">摄影</view>
			</view>
			<view class="tabs_underline" :style="{left: this.leftLenght}">
				<view style="" class="tabs_underline_content"></view>
			</view>
			<view style="width: 100%; height: 40rpx;">
				
			</view>
			<view class="my-course">
				<my-course v-show="tabIndex === 0" class="my-course_item" v-for="(item, index) in myUICourse" :key="item.id" :courseInfo="item"></my-course>
				<my-course v-show="tabIndex === 1" class="my-course_item" v-for="(item, index) in myPaintCourse" :key="item.id" :courseInfo="item"></my-course>
				<my-course v-show="tabIndex === 2" class="my-course_item" v-for="(item, index) in myFilmCourse" :key="item.id" :courseInfo="item"></my-course>
				<my-course v-show="tabIndex === 3" class="my-course_item" v-for="(item, index) in myPhotoCourse" :key="item.id" :courseInfo="item"></my-course>
			</view>
			<view class="window-bottom"></view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaRing = null;

	export default {
		data() {
			return {
				leftLenght: '0',
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				tabIndex: 0,
				courseLives: [{
						id: 13424,
						url: '',
						liveInfo: {
							sort: 'PS',
							describe: '学习PS',
							title: '【公开课】2020年PS设计之路',
							imageUrl: '../../static/images/live-background-img.png'
						}
					},
					{
						id: 245353,
						url: '',
						liveInfo: {
							sort: 'UI设计',
							describe: '科技性素材设计方法',
							title: '【公开课】2020年UI设计之路',
							imageUrl: '../../static/images/live-background-img.png'
						}
					}
				],
				myUICourse: [
					{
						id: 213213,
						imgSrc: '../../static/images/ui-course-cyan.png',
						title: 'UI运营设计训练营（第1期）第一节',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '已出勤'
					},
					{
						id: 3425423,
						imgSrc: '../../static/images/Pr.png',
						title: '零基础入门Premiere',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '未出勤'
					},
					{
						id: 5456,
						imgSrc: '../../static/images/Pr.png',
						title: '零基础入门Premiere',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '未出勤'
					},
					{
						id: 45345,
						imgSrc: '../../static/images/ui-course-blue.png',
						title: '零基础入门UI设计',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '已出勤'
					},
				],
				myPaintCourse: [
					{
						id: 3423432,
						imgSrc: '../../static/images/ui-course-cyan.png',
						title: 'UI运营设计训练营（第1期）第一节',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '已出勤'
					},
					{
						id: 8790,
						imgSrc: '../../static/images/Pr.png',
						title: '零基础入门Premiere',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '未出勤'
					}
				],
				myFilmCourse: [
					{
						id: 45436456,
						imgSrc: '../../static/images/Pr.png',
						title: '零基础入门Premiere',
						author: '绵绵羊',
						authorImg: '../../static/images/author-icon.png',
						attendance: '未出勤'
					}
				],
				myPhotoCourse: []
			}
		},
		onShareAppMessage() {
			//#ifdef MP-QQ
			qq.showShareMenu({
				showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
			})
			//#endif
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif

			// 仅出现在 H5 平台下的代码
			//#ifdef H5
			uni.getSystemInfo({
				success: (res) => {
					console.log('pixelRatio: ', this.pixelRatio);
					console.log(res.screenWidth);
					console.log(res.windowWidth)
					if (res.screenWidth >= 768) {
						this.cWidth = 600;
					} else {
						this.cWidth = uni.upx2px(750);
					}
				}
			})
			//#endif

			// 除了 H5 平台，其它平台均存在的代码
			//#ifndef H5
			this.cWidth = uni.upx2px(750);
			//#endif

			this.cHeight = uni.upx2px(400);
			let ring = {
				"series": [{
					"name": "今日学习",
					"data": 3,
					color: '#5d2dc4'
				}, {
					"name": "",
					"data": 7,
					color: '#dfcffd'
				}]
			}
			this.showRing("canvasRing", ring);
		},
		methods: {
			showRing(canvasId, chartData) {
				canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					padding: [5, 5, 5, 5],
					legend: {
						show: false
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: false,
					// subtitle: {
					// 	name: '3h',
					// 	color: '#5f2ec5',
					// 	fontSize: 20 * _self.pixelRatio,
					// },
					title: {
						name: '今日学习3h',
						color: '#5f2ec5',
						fontSize: 20 * _self.pixelRatio,
					},
					extra: {
						pie: {
							offsetAngle: 0,
							ringWidth: 15 * _self.pixelRatio,
							labelWidth: 15,
							offsetAngle: 90
						}
					},
				});
			},
			touchRing(e) {
				canvaRing.touchLegend(e, {
					animation: false
				});
				canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
			changeLeftLength(index, length) {
				this.tabIndex = index
				this.leftLenght = length;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.study {
		position: relative;

		/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
		.qiun-charts {
			width: 750upx;
			height: 400rpx;
			background-color: #FFFFFF;

			.charts {
				width: 750upx;
				height: 400rpx;
				background-color: #FFFFFF;
			}
		}

		.content {
			position: absolute;
			left: 3.6%;
			right: 3.6%;

			.total_hours {
				display: flex;
				flex-wrap: wrap;
				width: 100%;

				.total_hours_item {
					text-align: center;
					width: 50%;

					.total_hours_item_img {
						width: 28px;
						height: 28px;
					}
				}

				.division_line {
					border-right: 1px solid #dbdbdb;
				}
			}

			.course_live {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.course_live_item {
					width: 47.98%;
				}
			}

			.tabs_course_list {
				width: 100%;
				display: flex;
				// justify-content: space-around;
				// position: relative;

				.tabs_course_list_item {
					width: 25%;
					text-align: center;

				}
			}
			
			.tabs_underline {
				position: absolute;
				width: 25%;
				transition: all 300ms;
				
				.tabs_underline_content {
					height: 5px;
					width: 26px;
					margin: 0 auto;
					background: #5f2ec5;
				}
			}
			
			.my-course {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 100%;
				
				.my-course_item {
					width: 48%;
					margin-bottom: 12rpx;
				}
			}
		}
	}
</style>
