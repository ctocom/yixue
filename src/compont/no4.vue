<template>
	<div class="no4_max">
		<div class="no4_top">
			<div class="no4_tou">
				<img :src=userImg alt="">
				<!-- <img src="../assets/logo.png" alt=""> -->
			</div> 
			<p>易学优</p>
			<p>{{userName}}</p>
			<!-- {{userImg}} -->
		</div> 
		<!-- 内容 -->
		<div class="no4_cont">
			<div class="no4_cont_top">
				<div class="cont_top_max">
					<p>
						我的错题本
					</p> 
				</div>
				<div class="comt_link">
					<template>
					  <el-select v-model="value" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					</template>
				</div>
 
				<div class="cont_top_min">
					<router-link :to="{path:'/cuoti',query:{id:'1',name:'当前错题'}}">
						<div class="top_min_le">
							<div class="ic_clik">
								<p class="nums">{{Numsin}}</p>
							</div>
							<p>当前错题</p>
						</div>
					</router-link>
					<router-link :to="{path:'/cuoti',query:{id:'2',name:'历史错题'}}">
						<div class="top_min_ri">
							<div class="ic_clil">
							</div>
							<p>历史错题</p>
						</div>
					</router-link>
				</div>
			</div>

			<div class="cuo_null">
				<router-link :to="{path:'/qkong',query:{id:'1',name:'历史错题',papId:$route.query.papId}}">
					<p>当前错题清空</p>
				</router-link>
			</div>

			<div class="cont_bot_max">
				<div class="cont_bot_min">
					<div class="cont_bot_cont">
						<div class="bot_cont_img">
							<img src="../../images/my1.jpg" alt="">
						</div>
						<router-link :to="{path:'./myData',query:{name:'123'}}">
							<p>我的数据</p>
							<i>
								<img src="../../images/myri.png" alt="">
							</i>
						</router-link>
					</div>
					<div class="cont_bot_cont">
						<div class="bot_cont_img">
							<img src="../../images/my2.jpg" alt="">
						</div>
						<router-link :to="{path:'./myjifen',query:{name:''}}">
							<p>我的积分</p>
							<i>
								<img src="../../images/myri.png" alt="">
							</i>
						</router-link>
					</div>
					<div class="cont_bot_cont">
						<div class="bot_cont_img">
							<img src="../../images/my3.jpg" alt="">
						</div>
						<router-link :to="{path:'/shezhi',query:{name:'123'}}">
							<p>设置</p>
							<i>
								<img src="../../images/myri.png" alt="">
							</i>
						</router-link>
					</div>
					<div class="cont_bot_cont">
						<div class="bot_cont_img">
							<img src="../../images/my4.jpg" alt="">
						</div>
						<router-link :to="{path:'',query:{name:'123'}}">
							<p>意见反馈</p>
							<i>
								<img src="../../images/myri.png" alt="">
							</i>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class="no4_username">
			<div class="tui_btn" @click="naOver()">
				<router-link :to="{path:'#/no1'}">
				退出登录
				</router-link>
					
			</div>
		</div>

	</div>
</template>
<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				 options: [{
				          value: '1',
				          label: '语文'
				        }, {
				          value: '2',
				          label: '数学'
				        }, {
				          value: '3',
				          label: '英语'
				        }],
				        value: '1' ,
				
				href: gloal.userApi,
				userName:localStorage.getItem('userName'),
				userImg:localStorage.getItem('userImg'), 
				usid: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id')
				},
				Numsan: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id')
				},
				Numsin: [],
				cuoData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id')
				},
				cuoDatas: {},

			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() { 
				console.log(this.href) 
				var cuoData = this.cuoData
				this.$http.post(this.href + '/userErr', cuoData).then(response => {
					console.log(response)
					this.cuoDatas = response

				});
				// 获取错题数
				var Numsan = this.Numsan
				this.$http.post(this.href + '/errCount', Numsan).then(response => {
					console.log(response.body.data)
					this.Numsin = response.body.data
					if (response.body.code == '300') {
						this.$notify.error({
							title: '提示',
							message: '登陆信息已失效！前往登陆。'
						});
						// this.$router.push("#/no1")
						location.href = "#/no1"
					}
				}); 
			},
			// 退出登陆
			naOver() {
				var usid = JSON.stringify(this.usid);
				this.$http.post(this.href + '/logout', usid).then(response => {
					alert(response.body.msg)
					localStorage.setItem('user_token', null)
					localStorage.setItem('user_id', null) 
					location.href = "#/" 
				});
			},
		},
	}
</script>

<style> 
	.cuo_null {
		width: 60%;
		height: 40px;
		margin: 40px auto;
		line-height: 40px;
		text-align: center;
		background-color: salmon;

	}  
	.comt_link{
		    width: 40%;
		    height: 45px;
		    border-bottom: 1px solid #CCCCCC;
		    /* margin: 0 auto; */
		    float: left;
	}
	.el-select-dropdown el-popper{
		width: 100px;
	}
	.el-scrollbar__view{
		width: 100%;
	}
	.cuo_null p {
		color: white;
		font-size: 15px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.el-input {
		float: right;
		width: 56%;
	}

	.el-scrollbar__view {
		width: 60%;
	}

	.ic_clik {
		background-image: url(../../images/icon2.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.ic_clil {
		background-image: url(../../images/icon1.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.ic_clik .nums {
		font-size: 14px;
		color: white;
		background-color: red;
		width: 20px;
		height: 20px;
		line-height: 20px;
		float: right;
		border-radius: 50%;
	}

	.no4_max {
		width: 100%;
		margin-bottom: 103px;
	}

	.no4_top {
		width: 100%;
		height: 200px;
		padding-top: 40px;
		background-image: url(../../images/003.png);
		background-size: 100% 100%;
		text-align: center;
		line-height: 30px;
		font-size: 16px;
		color: white;
	}

	.no4_tou {
		width: 76px;
		height: 76px;
		margin: 10px auto;
		border: 4px solid #fcefbb;
		border-radius: 50%;
		overflow: hidden;
		background-image: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=144939704,3087253252&fm=26&gp=0.jpg');
		background-size: 100% 100%;
	}
	
	.no4_tou img{
		width: 100%;
		height: 100%;
	}

	.no4_cont {
		width: 100%;
		margin: 0 auto;
	}

	.cont_top_tet {
		width: 143px;
		height: 44px;
		float: right;
	}

	.el-select .el-input__inner {
		border: none;
	}

	.no4_cont_top {
		width: 100%;
		/* height: 35px; */
		padding: 15px 0;
	}

	.no4_cont_top p {
		float: left;
		line-height: 44px;
	}

	.cont_top_max {
		width: 50%;
		height: 45px;
		border-bottom: 1px solid #CCCCCC;
		/* margin: 0 auto; */
		float: left;
	}

	.cont_top_min {
		height: 135px;
	}

	.top_min_le,
	.top_min_ri {
		width: 30%;
		height: 90%;
		text-align: center;
	}

	.top_min_le div,
	.top_min_ri div {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		/* background-color: #ffaa00; */
		margin: 10px auto;
	}

	.top_min_le p,
	.top_min_ri p {
		width: 100%;
		text-align: center;
	}

	.top_min_le {
		float: left;
		margin-left: 15%;
	}

	.top_min_ri {
		float: right;
		margin-right: 15%;
	}

	.cont_bot_max {
		width: 100%;
		margin-top: 10px;
	}

	.cont_bot_min {
		width: 96%;
		padding: 0 2%;
	}

	.bot_cont_img {
		float: left;
		width: 22px;
		height: 22px;
		position: relative;
		left: -10px;
		top: 5px;
	}

	.bot_cont_img img {
		width: 100%;
		height: 100%;
	}

	.cont_bot_cont {
		height: 60px;
		/* background-color: cadetblue; */
		margin: 2px 0;
		line-height: 60px;
		border-bottom: 1px solid #CCCCCC;
		overflow: hidden;
		padding-left: 35px;
	}

	.cont_bot_cont p {
		font-size: 16px;
		float: left;
		color: black;
	}

	.cont_bot_cont i {
		font-size: 18px;
		float: right;
		color: black;
		margin-right: 10px;
	}

	.cont_bot_cont i img {
		width: 15px;
		height: 15px;
	}

	.no4_username {
		width: 70%;
		margin: 20px auto;
		line-height: 50px;
		color: #fff;
		font-size: 20px;
		border-radius: 8px;
		text-align: center;

	}

	.tui_btn {
		margin-bottom: 10px;
		border-radius: 10px;
		background-color: sandybrown;
		/* display: none; */
	}

	.tui_btn a {
		color: white;
		font-size: 16px;
	}

	.deng_btn {
		margin-bottom: 10px;
		border-radius: 10px;
		background-color: sandybrown;
	}

	.deng_btn a {
		color: white;
		font-size: 16px;
	}
</style>
