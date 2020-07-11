<template>
	<div class="my_max">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					<p style="float: right;color: black;"> 我 的 积 分 </p>
				</a> 
			</span>  
		</div>
		<div class="my_banner" style="margin-top: 10px;">
			<!-- <p>当前积分：</p> -->
		</div>

		<div class="my_cont_tet">
			<ul class="tabs">
				<li class="li-tab" v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{my_active:index==nowIndex}">{{item}}</li>
			</ul>
		</div>

		<div class="divTab" v-show="nowIndex===0">
			<div class="divTab_btn">
				<el-button type="text"  @click="open()">
					<p style="color: white;">{{sign_type}}</p>
				</el-button>
			</div>
			<div class="qian_p">
				<p>每月签到满勤，课额外在赠送25积分</p>
			</div>
			<div class="qian_h">
				<h3>签到情况：{{ myQians }}</h3> 
			</div>
			<div class="jilu">
				<div v-for="i in jilus">
					<!-- {{i}} -->
					<h3>{{i.username}}</h3>
					<p>{{i.sign_in_time}}</p>
					<p style="float: right;"> +{{i.integral}}</p>
				</div>
			</div>
		</div>
		<div class="divTab" v-show="nowIndex===1">
			<div class="divTab_top">
				<p>排行榜（ 前10名 ）</p>
			</div>
			<ul class="divTab_bot">
				<li v-for="(j,index) in myPai">
					<div style="float: left;">
						<h3 style="float: left;margin-right:20px;">NO:{{index+1}}</h3>
						{{j.name}}
					</div>
					<span class="jf_span">
						{{j.score}}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				tabsParam: ['赚取积分', '积分排行'],
				myPai: {
					user_token: localStorage.getItem('user_token')
				},
				myQian: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id')
				},
				myPais:{},
				// options:{},
				myQians:'',
				nowIndex: 0,
				jilu:{
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token')
				},
				sign_type:'',
				jilus:{}
			}
		},
		mounted() {
			this.goHome()
      this.getSignList()
		},
		methods: {
			toggleTabs: function(index) {
				this.nowIndex = index;
				if(index==0){
					this.getSignList()
				}
			},

			open() {
				var myQian = JSON.stringify(this.myQian);
				this.$http.post(this.href + '/signIn', myQian).then(response => {
				this.myQians = response.body.msg
				if (response.body.code == '300') {
					alert('登录信息已失效，请重新登录')
				}else{
					this.$alert('已成功签到签到', '签到情况', {
						confirmButtonText: '确定',
						callback: action => {}
					});
				}
				});

			},
			getSignList(){
				let options = {
					user_id:localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token')
				}
				this.$http.post(this.href + '/signList', options).then(response => {
					this.jilus = response.body.data.user_sign
          this.myQians = response.body.data.type =='已签到' ? '今天已经签到过啦!' :'';
					// console.log(rresponse.body.data esponse.body.code)
				});
			},
			goHome() {
				var myPai = JSON.stringify(this.myPai);
				this.$http.post(this.href + '/signRankList', myPai).then(response => {
					this.myPai = response.body.data
				});
				var jilu = JSON.stringify(this.jilu);
				this.$http.post(this.href + '/signList',jilu).then(response => {
					this.jilus = response.data.data.user_sign
					this.sign_type = response.data.data.type
				});
			},
			// qianClick() {
			// 	var myQian = JSON.stringify(this.myQian);
			// 	this.$http.post(this.href + '/signIn', myQian).then(response => {
			// 		console.log(response)
			// 	});
			// }
		}
	}
</script>

<style>
	.xue_hears{
		display: block;
	}
	.el-button {
		width: 100%;
		height: 100%;
	}

.jilu{
	padding: 20px 0;
	line-height: 30px;
	padding-bottom: 70px;
}
.jilu div{
	border-bottom: 1px solid black;
	padding-bottom: 5px;
	height: 60px;
	margin-bottom: 20px;
}
.jilu div p{
	float: left;
}
	.my_active {
		border-bottom: 2px solid #f9d326;
	}

	.my_banner {
		width: 100%;
		height: 90px;
		line-height: 78px;
		font-size: 16px;
		text-align: center;
		background-image: url(../../images/date.jpg);
		background-size: 100% 130% ;
	}

	.my_cont_tet {
		height: 45px;
	}

	.tabs {
		width: 90%;
		margin: 0 auto;
		height: 100%;
		display: flex;
	}

	.tabs .li-tab {
		text-align: center;
		;
		line-height: 45px;
		flex: 1;
	}

	.divTab {
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
	}

	/* .divTab_bot p {
		float: left;
	} */

	.divTab .jf_span {
		float: right;
		color: darksalmon; ;
	}

	.divTab_btn {
		width: 40%;
		height: 44px;
		margin: 20px auto;
		text-align: center;
		line-height: 44px;
		border: 0;
		border-radius: 44px;
		box-shadow: 0 5px 2px 0px #b2ceff;
		background-image: url(../../images/btn_bag_03.jpg);
	}
	.divTab_btn button{
		width: 100%;
	}

	.divTab_cont {
		display: flex;
	}

	.divTab_cont li {
		padding: 10px 10px;
		text-align: center;
		/* background-color: sandybrown; */
		flex: 1;
	}

	.el-button el-button--text{
		width: 100%;
	}

	.el-button {
		width: 46%;
	}

	.qian_p {
		height: 40px;
		line-height: 40px;
		text-align: center;
		/* border: 1px dodgerblue solid; */
		margin: 10px;
		font-size: 14px;
	}
	.qian_h{
		width: 80%;
		height: auto;
		margin: 0 auto;
	}
	.qian_h h3{
		margin: 10px 0;
	}
	.qian_h p{
		font-size: 14px;
		float: left;
	}
	
	.my_max{
		width: 70%;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 980px) {
		.my_max{
			width: 100%;
		}
	}
</style>
