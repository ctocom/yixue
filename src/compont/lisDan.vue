<template>
	 <div class="dan">
		 <div class="xue_hears">
		 	<router-link :to="{path:'/no4',query:{id:'1'}}">
		 		<span> < </span>
			</router-link> 
					 <!-- <router-link :to="{path:'',query:{id:'1'}}"> -->
				<span style="float: right;">答案</span> 
					<!-- </router-link> -->
		 </div>
		 <div class="paName">
			 <p>提示：请输入二级密码，获取答案</p> 
			密码： <input type="password" v-model="lisData.seconds_password" placeholder="请输入密码">
		 </div>
		<div class="erJi" @click="goHome()">
			确定
		</div> 
		<div id="lisDan">
			
			
			<div v-for="i in lisDatas"> 
				({{i.group_id}})
				 <div style="text-align: left;line-height: 22px ;"  v-html="i.keyword"> {{i.keyword}} </div>
				 <div style="text-align: left;line-height: 22px ;"  v-html="i.options"> {{i.options}} </div>
				 <div style="text-align: left;line-height: 22px ;"  v-html="i.answer"> {{i.answer}} </div>
				  
				<div style="text-align: left;line-height: 22px;" v-for="j in i.children" > 
					({{j.group_id}})
					<div v-html="j.keyword">
						{{j.keyword}}
					</div>
				</div>   
			</div> 
		</div>
		
		<div class="lisBtn">
			<a :href="lisUrl">  
				<button class="erJi">打印</button>
				<i>请输入密码后进行打印！</i>
			</a>  
		</div>
		 
		
	 </div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				lisData:{
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'),  
					type:'2',
					user_err:'1',
					seconds_password:'',
					course_id:''
				},
				lisDatas:{},
				lisUrl:''
			}
		},
		mounted(){
			// this.goHome()
		},
		methods:{
			goHome() { 
				this.lisData.course_id = this.$route.query.courseId
				this.lisData.user_err = this.$route.query.name
				var lisData = JSON.stringify(this.lisData); 
				this.$http.post(this.href + '/userErr', lisData).then(response => {
					console.log(response.data.data.err_data)     
					this.lisDatas = response.data.data.err_data
					if(response.data.code == '0'){
						this.$notify.info({
						  title: '提示',
						  message: response.data.msg
						});  
					} 
					this.lisUrl = response.data.data.err_url
					if(response.body.code == '300'){
						alert('登录信息已失效，请重新登录')
					}
				}); 
			},
		}
	}
</script>

<style> 
#lisDan{
	line-height: 30px;
}
.lisBtn i{
	 font-size: 12px;color: #CCCCCC; 
}
.paName{
	width: 80%;
	height: auto;
	margin: 0 auto;
	padding: 5px 0;
	font-size: 14px;
}
.paName input{
	width: 75%;
	height: 35px;
	margin: 10px 0;
	border: 1px solid black;
	padding-left: 4%;
}
.erJi{
	width: 60%;
	height: 50px;
	margin: 0 auto;
	text-align: center;
	background-color: sandybrown;
	line-height: 50px;
	font-size: 20px;
	color: white;
}
.div_p{
	line-height: 30px;
}
.lisBtn{
	width: 60%;
	height: 50px;
	margin: 50px auto;
	text-align: center;
	background-color: sandybrown;
	line-height: 50px;
	font-size: 20px;
	color: white; 
}
.lisBtn button{
	width: 100%;
	height: 100%;
	/* background-color: salmon; */
	border: 1px solid salmon;
}
.dan{
	padding-bottom: 20px;
}
</style>
