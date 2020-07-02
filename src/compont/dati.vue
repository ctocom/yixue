<template>
	<div class="dang_max">
		<div class="dang_hear">
			<p style="float: left;">
				<router-link :to="{path:'/no3',query:{name:''}}">
					<i>[icon]</i>
				</router-link> 
				【当前学习】
				{{this.$route.query.id}} 
			</p>
			<p style="float: right;">
				【英语语法】
			</p>
		</div>
		
		<div class="dang_cont">
			<div class="dang_banner">
				<img src="../../images/ban_03.jpg" alt="">
			</div>
			<!-- 循环任务 -->
			<div id="xun_max" class="xunhuan"  v-for="i in unit_list">
				<div style="height: 20px;">	
				<span style=" height: 13px; margin: 0 10px; border: 2px solid skyblue; float: left;"></span><p style="float: left;">[第一循环]</p>
				</div>
				<div class="xun_cont"> 
					<div class="xun_cont_top">
						<p class="xun_cont_top_p">{{i.name}}</p>
						<div class="xun_jindu">
							<div class="nei_jindu">  
							<p class="pos_p">10%</p>
							</div>
							
						</div>
					</div>
					<div class="xun_cont_bot"> 
						<div id="xub" class="xun_cont_data" v-for="j in i.module">
							<router-link :to="{path:'/shipin',query:{name:''}}">
								<div class="cont_bot_img"> 
									{{j.is_complete}}
								</div>
								<div class="cont_bot_tet"> 
									{{j.name}}
								</div>
							</router-link>
						</div>  
					</div>
				</div> 
			</div>
			
			<!-- 内容 -->
			
			<div class="neirong">
				<div class="nei_top" style="height: 20px;"> 
					<p style="color: red;font-size: 16px;float: left;"><span>【icon】</span>[全部内容]</p>
					<span style="float: right; color: red;">[英语语法]</span>
				</div>
				<div class="nei_bot" v-for="i in unit_info"> 
					<router-link :to="{path:'/dayin',query:{name:''}}">						 <div class="nei_bot_">
							<i style="font-size: 15px;text-align: center;display: block;color: #909090;">课程 ： 把课式</i> 
							<h4 style="float: left;">[1. {{i.name}} ： 第一课时]</h4>
							<span style="float: right;">[三个点标]</span>
						 </div> 	
					</router-link> 
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
				href:gloal.userApi, 
				dqData:{ 
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'),
					section_id:''
				},
				unit_list:[],
				unit_info:[],
				
			}
		},
		mounted(){
			this.goHome()
		}, 
		methods:{
			goHome() {
					this.dqData.section_id = this.$route.query.id
					var dqData = JSON.stringify(this.dqData);
					this.$http.post(this.href+'/unitList',dqData).then(response => {
						// console.log(response.data.data) 
						this.unit_list = response.data.data.unit_list
						this.unit_info = response.data.data.unit_info  
						// console.log(this.unit_list.module)
						if(response.body.code == '300'){
							alert('登录信息已失效，请重新登录')
						}
						 
					});	  
			}, 
		}
	}
	
</script>

<style>
	@media screen and (max-width: 980px) {
		.dang_max{
			width: 100%;
			height: 100vh;
			background-color: white;
			position: relative;
		}
		.dang_hear{
			width: 96%;
			height: 55px; 
			padding: 0 2%;
			background-image:url(../../images/1.jpg) ;
			background-size: 100% 100%;
			line-height: 55px;
		}
		.dang_cont{
			width: 95%;
			margin: 0 auto;
			background-color: #f8f8f8;
		}
		.dang_banner{
			height: 78px;  
			width: 100%;
			border-radius: 10px;
			margin: 20px auto;
			overflow: hidden;
		}
		.dang_banner img{
			width: 100%;
			/* height: 100%; */
		}
		.xunhuan,.neirong{
			height: 220px; 
			 height: auto;
		}
		.xun_cont{
			width: 100%;
			height: 102px;
			border-radius: 30px;
			background-color: #f3faff;
			margin: 10px 0;
			box-shadow: 0 0 3px 1px #e5e5e5;
		}
		.xun_cont_top{
			height: 40px;
			margin: 10px 0;
			line-height: 30px;
			/* text-align: center; */
		}
		.xun_cont_top_p{
			padding: 10px 0 0 20px;
			float: left;
		}
		.xun_cont_bot{
			width: 100%;
			height: 35%;
			display: flex;
		}
		.xun_cont_bot .xun_cont_data{
			margin: 0 10px;
			flex: 1;
			float: left;
			font-size: 14px;
			line-height: 30px; 
			border-radius: 25px;  
			/* background-color: #ffdd57; */
			background-color: #CCCCCC;
		}
		.cont_bot_img,.cont_bot_tet{
			width: 45%;
			height: 100%;
			line-height: 35.7px;
			float: left; 
		}
		.xun_cont_data{ 
			width: 80%;
			margin: 0 auto;
			text-align: center;
		}
		.xun_cont_data a{
			line-height: 5px;
		}
		.xun_jindu{
			width: 57%;
			float: right;
			height: 8px;
			margin: 20px 10px 0 ; 
			border-radius:10px;
			/* overflow: hidden; */
			background-color: #666666;
			
		}
		.nei_jindu{
			width:80%;
			height: 100%;
			border-radius:10px;
			background: repeating-linear-gradient(120deg, #ff8102 ,#ff8102 7px, #ff9d3a -1px, #ff9d3a 14px); 
		position: relative;
		}
		.nei_top{
			border-bottom: 1px dashed #C0C0C0;
			margin: 0 0 10px;
		}
		.nei_bot{ 
			height: 100px;
			line-height: 40px; 
			border-radius: 30px;
			background-color: #f3faff;
			margin: 10px 0;
			box-shadow: 0 0 3px 1px #e5e5e5;
		}
		.pos_p{
			position: absolute;
			right: -10px;
			top: -30px;
			width: 30px;
			height: 25px; 
			/* background-color: red; */
			text-align: center;
			line-height: 25px; 
		}
	}
</style>
