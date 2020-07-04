<template>
	<div class="dayin_max">
		<div class="xue_hears">
			<router-link :to="{path:'/no4',query:{id:'1',papId:$route.query.papId}}">
				<span>
					< </span> </router-link> <router-link :to="{path:'',query:{id:$route.query.id,id2:this.$route.query.id}}"> 
						<span style="float: right;">错题 </span>
			</router-link>
		</div>

		<div class="topic">
			<h3>请勾选回答错误的试题</h3>
			<div class="top_thr">
				<div class="sp_int" v-for=" (i,index) in cuoDatas">  
					<span>{{index+1}}</span>
					<input id="int" type="checkbox" :value=i.id v-model="tiData.question_str">
				</div>  
			</div> 
		</div>  
		<div class="kongCli" @click="goClick()">
			<p>清空试题</p>
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
				haoData:{
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'), 
					paper_id:localStorage.getItem('papId')
				},
				haoDatas:{},
				
				cuoData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					user_err: '1',
					course_id:'1',
					type: '1'
				},
				cuoDatas: {}, 
				
				
				
				tiData: {
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'), 
					question_str:[], 
				},
				
			}
		},
		mounted() { 
			this.goHome()
		},
		methods: { 
			goHome(){  
				
				this.cuoData.user_err = this.$route.query.id
				this.cuoData.course_id = this.$route.query.course_id
				var cuoData = this.cuoData
				this.$http.post(this.href + '/userErr', cuoData).then(response => {
					// console.log(response.data.data)
					this.cuoDatas = response.data.data.err_data
					if (response.body.code == '300') {
						alert('登录信息已失效，请重新登录')
					} 
				}); 
			},
			goClick(){ 
				if(!this.tiData.question_str.length){
					 this.$notify.info({
					 	title: '提示',
					 	message: '请选择错题', 
					 });
					  return
				}    
				
				this.tiData.course_id = this.$route.query.course_id
				var tiData = JSON.stringify(this.tiData);
				this.$http.post(this.href + '/errorClear', tiData).then(response => { 
					if (JSON.stringify(response.data.code, null, 4) == 200) {
						 this.$notify.info({
						 	title: '提示',
						 	message: '错题已清除'
						 }); 
						 location.href = "#/no4";
					}
				});
			}
		}
	}
</script>

<style>
	@media screen and (max-width: 980px) {
		.kongCli{
			width: 70%; 
			height: 50px;
			margin:0 auto;
			text-align: center;
			background-color: salmon;
			line-height: 50px;
			font-size: 20px;
			color: black;
		}
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
		.topic h3{
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
		.tishi{
			height: 40px;
			/* background-color: #00008B; */
			margin-bottom: 10px;
			font-size: 14px;
			color: #CCCCCC;
			text-align: center;
			
		}


	}
</style>
