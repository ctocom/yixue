<template>
	<div class="no4_max">
		<div class="no4_top">
			<div class="no4_tou">
				<img :src=userImg alt="">
				<!-- <img src="../assets/logo.png" alt=""> -->
			</div>
			<p>易学优</p>
			<!-- {{userImg}} -->
			<p>{{userName}}</p>
			
		</div>
		<!-- 内容 -->
		<div class="no4_cont">
			<div class="no4_cont_top">
				<div class="cont_top_max">
					<p>
						我的错题本
					</p>
					<el-select v-model="course_id" placeholder="学科分类" @change="change">
					    <el-option
					      v-for="item in options"
					      :key="item.id"
					      :label="item.name"
					      :value="item.id">
					    </el-option>
					  </el-select>
				</div>

				<div class="cont_top_min">
					<router-link :to="{path:'/cuoti',query:{id:'1',name:'当前错题',course_id:course_id}}">
						<div class="top_min_le">
							<div class="ic_clik">
								<p class="nums">{{Numsin}}</p>
							</div>
							<p>当前错题</p>
						</div>
					</router-link>
					<router-link :to="{path:'/cuoti',query:{id:'2',name:'历史错题',course_id:course_id}}">
						<div class="top_min_ri">
							<div class="ic_clil">
							</div>
							<p>历史错题</p>
						</div>
					</router-link>
				</div>
			</div>

			<div class="cuo_null">
				<router-link :to="{path:'/qkong',query:{id:'1',name:'历史错题',papId:$route.query.papId,course_id:course_id}}">
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
				options: [],
				course_id: '',
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
				Numsin: '',
				cuoData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id')
				},
				cuoDatas: {},

			}
		},
		mounted() {
      this.getCourse()
			// this.goHome()
		},
		methods: {
      getCourse(){
        let options = {
          user_token: localStorage.getItem('user_token')
        }
        this.$http.post(this.href + '/course', options).then(response => {
        	console.log(response)
          this.options = response.data.data
          if(this.options.length){
            this.course_id = this.options[0].id
            this.goHome(this.options[0].id)
          }
        });
      },
      change(id){
        this.goHome(id)
      },
			goHome(id) {
				console.log(this.href)
				var cuoData = this.cuoData 
				var Numsan = this.Numsan
        Numsan.course_id = id
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
		height: 6vh;
		margin: 0 auto;
		line-height: 6vh;
		text-align: center;
		background-color: salmon; 
	}

	.cuo_null p {
		color: white;
		font-size: 2vh;
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
		margin: 60px auto;
		margin-bottom: 103px;
	}

	.no4_top {
		width: 100%;
		height: 35vh;
		padding-top: 40px;
		background-image: url(../../images/003.png);
		background-size: 100% 100%;
		text-align: center;
		line-height: 30px;
		font-size: 2vh;
		color: white;
	}

	.no4_tou {
		width: 12vh;
		height: 12vh;
		font-size: 2vh;
		margin: 10px auto;
		border: 4px solid #fcefbb;
		border-radius: 50%;
		overflow: hidden;
	}

	.no4_tou img{
		width: 100%;
		height: 100%;
	}

	.no4_cont {
		width: 80%;
		margin: 0 auto;
	}

	.cont_top_tet {
		width: 143px;
		height: 44px;
		float: right;
	}

	.el-select .el-input__inner {
		border: none;
		font-size: 2vh;
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
		width: 90%;
		height: 7vh;
		border-bottom: 1px solid #CCCCCC;
		margin: 0 auto;
    display: flex;
        justify-content: space-between;
		font-size: 2vh;
	}

	.cont_top_min {
		height: 20vh;
	}

	.top_min_le,
	.top_min_ri {
		width: 30%;
		height: 90%;
		text-align: center;
		font-size: 2vh;
	}

	.top_min_le div,
	.top_min_ri div {
		width: 12vh;
		height: 12vh;
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
		width: 3vh;
		height: 3vh;
		position: relative;
		left: -10px;
		top: 5px;
	}

	.bot_cont_img img {
		width: 100%;
		height: 100%;
	}

	.cont_bot_cont {
		height: 9vh;
		/* background-color: cadetblue; */
		margin: 2px 0;
		line-height: 9vh;
		border-bottom: 1px solid #CCCCCC;
		overflow: hidden;
		padding-left: 35px;
		font-size: 2vh;
	}

	.cont_bot_cont p {
		font-size: 2vh;
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
		height: 6vh;
		margin: 20px auto;
		line-height: 6vh;
		color: #fff;
		font-size: 2vh;
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
		font-size: 2vh;
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
	@media screen and (max-width: 980px) {
		.no4_max {
			width: 100%;
			margin: 0px auto;
			padding-bottom: 83px; 
		}
		.no4_cont {
			width: 100%; 
		}
		.no4_top {
			width: 100%;
			height: 28vh;
			padding-top: 40px;
			background-image: url(../../images/003.png);
			background-size: 100% 100%;
			text-align: center;
			line-height: 30px;
			font-size: 2vh;
			color: white;
		}
	}
</style>
