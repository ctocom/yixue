<template>
	<div class="myd_max">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					<p style="float: right;color: black;"> 我 的 数 据 </p>
				</a> 
			</span>  
		</div>

			<!-- 内容了 -->

			<div class="cont_top">
				<h3>数据曲线</h3> 
				<div class="cont_top_atl">
					<!-- <el-progress :percentage="80"></el-progress> -->
					<p>学习进度</p>
					<el-progress :percentage="nam1" :format="format"></el-progress>
					<p>正确率</p>
					<el-progress :percentage="nam2" :format="format"></el-progress>
					<!-- <el-progress :percentage="100" status="warning"></el-progress>
					<el-progress :percentage="50" status="exception"></el-progress> -->
				</div>
			</div>
			<div class="myd_foot">
				<div class="myd_foot_bner">
					<img src="../../images/date.jpg" alt="">
				</div>
				<!-- banner 下的内容 -->
				<div class="myd_foot_cont">
					<div class="myd_foot_pai">
						<div class="divTab_top">
							<p>排行榜（ 前10名 ）</p>
						</div>
						<ul class="divTab_bot">
							<li v-for="i in myDatas">
								<p>
									{{i.name}}
								</p>
								<!-- <time>{{i.last_login_time}}</time> -->
								<span style="float: right;">
									{{i.score}}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				map: ['学习时长', '我的进度', '我的错题', '我的正确率'],
				options: {}, 
				myData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
				},
				myDatas: {},
				nam1:'',
				nam2:''
			}
		},

		mounted() {
			this.goHome()
		},
		methods: {
			 format(percentage) {
			        return percentage === 100 ? '满' : `${percentage}%`;
			},
			goHome() {
				var myData = JSON.stringify(this.myData);
				this.$http.post(this.href + '/statisticsStudent', myData).then(response => {
					console.log(response.data.data)
					this.nam1 = response.data.data.study_rate
					this.nam2 = response.data.data.true_rate 
					this.myDatas = response.data.data.student_rank
					if (response.body.code == '300') {
						this.$notify.error({
							title: '提示',
							message: '登录信息已失效，请重新登录！'
						});
					}
				});
			},
		}

	};
</script>

<style>
	.myd_max {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 3;
		background-color: white;
		padding-bottom: 20px;
	}
	.myd_foot{
		background-color: white;
	}

	.myd_hear {
		height: 7vh;
		padding: 0 20px;
		line-height: 7vh;
		background-image: url('../../images/no3_net_03.jpg');
	}

	.myd_hear a {
		color: white;
		font-size: 15px;
	}

	.myd_cont {
		width: 90%;
		margin: 0 auto;

	}

	.myd_cont_nav {
		height: 35px;
		display: flex;
	}

	.cont_nav_flex {
		flex: 1;
	}

	.cont_nav_flex li {
		width: 70%;
		margin: 0 auto;
		text-align: center;
		line-height: 35px;
	}

	.myd_active {
		border-bottom: 1px solid darkorange;
	}

	.cont_top {
		width: 90%;
		margin: 0 auto;
		line-height: 35px;
	}

	.cont_top_map {
		width: 100%;
		display: flex;
	}

	.cont_top_map li {
		height: 30px;
		line-height: 30px;
		text-align: center;
		flex: 1;
		position: relative;
	}

	.cont_top_map li i {
		position: absolute;
		/* left: 5px; */
		top: 50%;
		margin-top: -4px;
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 3px;
		/* background-color: sienna; */
	}

	.myd_foot {
		width: 100%;
		height: auto;
	}

	.myd_foot_bner {
		    height: 15vh;
		    margin: 2vh 0;
		background-color: salmon;
	}

	.myd_foot_bner img {
		width: 100%;
		height: 100%;
	}

	.myd_foot_cont {
		width: 90%;
		margin: 0 auto;
	}

	.divTab_top {}

	.divTab_bot {
		width: 100%;
	}

	.divTab_bot li {
		height: 40px;
		font-size: 16px;
		margin: 5px 0;
		line-height: 40px;
		border-bottom: 1px solid silver;
	}

	.divTab_bot p {
		float: left;
	}

	.divTab .jf_span {
		float: right;
		color: darksalmon;
	}

	.cont_top_atl {
		margin: 15px;
	}

	.el-select {
		float: right;
	}
	
	
	.myd_max{
		width: 70%;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 980px) {
		.myd_max{
			width: 100%;
			margin: 0 auto;
		}
	}
</style>
