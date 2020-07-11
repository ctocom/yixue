<template>
	<div class="dayin_max">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					错 题
					
				</a> 
			</span> 
		</div>  

		<div class="topic">
			<h3>请勾选回答错误的试题</h3>
			<div class="top_thr">
				<div class="sp_int" v-for="(i,index) in haoDatas">
					<span>{{index+1}}</span>
					<input id="int" type="checkbox" :value=i.question_id v-model="names">
				</div>
			</div>
		</div>
		<!-- <p>您选中的题号有：{{names}}</p> -->
		<div class="tishi">
			<p>(错题选则完成后点击完成即可进行对错题的录入和积累)</p>
		</div>
		<div class="yin_btn" @click="luClick()">
			 
				完成
			 
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				names: [],
				haoData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					paper_id: this.$route.query.papId
				},
				haoDatas: {},
				tiData: {
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'),
					paper_id:'',
					question_str: []
				},
				tiDatas: []

			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				 
				var haoData = JSON.stringify(this.haoData);
				this.$http.post(this.href + '/paperQuestionList', haoData).then(response => {
					 
					this.haoDatas = response.data.data.paper_data
				});
			},
			luClick() {   
				if (!this.tiData.question_str) {
					this.$notify.info({
						title: '提示',
						message: '请选择错题'
					});
					return
				}

				console.log(this.tiData)
				
				this.tiData.paper_id = this.$route.query.papId
				this.tiData.question_str = this.names  
				var tiData = JSON.stringify(this.tiData);
				this.$http.post(this.href + '/recordErrorQuestion', tiData).then(response => {
					localStorage.setItem('papId',this.$route.query.papId) 
					if (response.body.code == 200) {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
						location.href = "#/no4";
					} else
					if (response.body.code == 0) {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
					}
				});
			}
		}
	}
</script>

<style>
	/* @media screen and (max-width: 980px) { */
		.dayin_max {
			height: auto;
			position: relative;
			z-index: 4;
			background-color: white;
		}

		.yin_btn {
			width: 90%;
			height: 50px;
			background-color: #fe9e30;
			text-align: center;
			margin: 0 auto;
			line-height: 50px;
		}

		.topic {
			width: 90%;
			height: auto;
			height: 200px;
			margin: 0 auto;
			text-align: center;
			line-height: 30px;
			margin-bottom: 30px;
		}

		.topic h3 {
			margin-bottom: 20px;
			margin: 10px 0 30px;
			text-align: center;
		}

		.top_thr {
			width: 100%;
			height: 80px;
			margin: 10px 0;
		}

		.top_thr input {
			width: 35px;
			height: 35px;
		}

		/* input样式 */
		input[type="checkbox"] {
			-webkit-appearance: none;
			/* background-color: red; */
			border: 2px solid #CCCCCC;
			border-radius: 10px;
			transition: .3s;
		}

		input[type='checkbox']:checked {
			background-color: red;
			transition: .3s;
		}

		.sp_int {
			width: 20%;
			float: left;
			position: relative;
			overflow: hidden;

		}

		.sp_int span {
			width: 0px;
			height: 10px;
			position: absolute;
			top: 3px;
			left: 50%;
			margin-left: -5px;
			z-index: -1;
		}

		.tishi {
			height: 40px;
			/* background-color: #00008B; */
			margin-bottom: 10px;
			font-size: 14px;
			color: #CCCCCC;
			text-align: center;

		}
	/* } */
</style>
