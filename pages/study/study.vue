<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts"></canvas>
			<!--#endif-->
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
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: ''
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
					if(res.screenWidth >= 768) {
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

			this.cHeight = uni.upx2px(500);
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
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
