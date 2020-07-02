<template>
	<div class="xue_max">
		<!-- 头部 -->
		<div class="xue_hears">
			<span>
				<a href="javascript:history.go(-2);"> < </a>
			</span> 
			<span style="float: right;"> 英语
				</span> 
		</div> 
		<div class="cont_max">
			<div class="cont_max_hear" @click="goHome()">
				<ul class="tabs">
					<li class="li-tab" v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{my_active:index==nowIndex}">
						<p>{{item}}</p>
					</li>
				</ul>
			</div> 
				<!-- 视频 -->
			<div class="divTab" v-if="nowIndex===0">
				<p class="max_p">视频教程</p>
				<div class="divTat">
					<div class="video-wrap">
						<video width="100%" height="185px" controls :src="Myauto"> </video>
						<!-- {{Myauto}} -->
					</div>
				</div>
				<div class="divTab_one" v-for="(i,index) in spDatas" >

					<div style="width: 95%;margin: 0 auto;">
						<div class="tab_one_le">
							<img :src=i.banner alt="">
						</div>
						<div class="tab_bot_ri">
							<h3>{{i.title}}</h3>
							<p>时间：{{i.create_time}}</p>
						</div> 
					</div> 
					<div class="span-sp">   
						<span @click="guankan(index)">点击观看</span> 
						<router-link :to="{path:'/shipin',query:{material_id:i.id,id:$route.query.id,id2:$route.query.id2}}">
							<span @click="spJang()">讲解</span>
						</router-link> 
					</div>
				</div>
			</div>

			<!-- 音频 -->
			<div class="divTab" v-if="nowIndex===1">
				<p class="max_p">音频教程</p>
				<div class="divTat">
					<div class="video-wrap">
						<div class="aud_img">
							<img src="../../images/ban_03.png" alt="">
						</div>
						<div class="audio">
							<audio controls :src='Myauto'> </audio>
						</div>
					</div>
				</div>
				<div class="divTab_one" v-for="(i,index) in spDatas">
					<div style="width: 90%;margin: 0 auto;">
						<div class="tab_one_le">
							<img :src=i.banner alt="">
						</div>
						<div class="tab_bot_ri">
							<h4 style="color: #000000;">{{i.title}}</h4> 
							<p>时间：{{i.create_time}}</p>
							<div class="span-sp">
								<span @click="guankan(index)">点击观看</span> 
								<router-link :to="{path:'/shipin',query:{material_id:i.id,id:$route.query.id,id2:$route.query.id2}}">
									<span @click="spJang()">讲解</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- PPT -->
			<div class="divTab" v-if="nowIndex===2">
				<p class="max_p">PPT教程</p>
				<div class="ppt_bner">
					<div class="bner_img"> 
					</div>
				</div>
				<div class="bner_tet">
					<h4>马老师教程</h4>
					<p>让你快乐学习</p>
				</div>
				<div class="divTab_one" v-for="(i,index) in spDatas" >
					<div style="width: 90%;margin: 0 auto;">
						<div class="tab_one_le">
							<img :src=i.banner alt="">
						</div>
						<div class="tab_bot_ri">
							<h4 style="color: #000000;">{{i.title}}</h4>
							<!-- <p>{{i.introduction}}</p> -->
							<p>时间：{{i.create_time}}</p>
							<div class="span-sp"> 
								<span>
									<a target="_blank" :href="'https://view.officeapps.live.com/op/view.aspx?src='+i.file_url">点击观看</a>
								</span> 
								<router-link :to="{path:'/shipin',query:{material_id:i.id,id:$route.query.id,id2:$route.query.id2}}">
									<span @click="spJang()">讲解</span>
								</router-link> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="foot_two">
			<p @click="Comp()">全部完成</p>
			<router-link :to="{path:'/dayin',query:{id:$route.query.id,id2:this.$route.query.id2}}">
				<p> 打印试题 </p>
			</router-link>
		</div>
	</div>
</template>
<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				tabsParam: ['视频', '音频', 'PPT'],
				nowIndex: 0,
				spData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					unit_id: '1',
					type: '1',
				},
				spDatas: [],
				Myauto: '', 
				dpData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					unit_list_id: '1'
				},
				dpDatas: [],
				taChin: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					section_id: '1',
					type: '1'
				},
				jangData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					material_id: '1',
				},
				jangDatas: {},
				id2:this.$route.query.id2,
				material_id:this.$route.material_id
			};
		},
		mounted() {
			this.goHome()
			// this.jangData.material_id = this.$route.query.material_id
			
		},
		methods: {
			guankan:function(idx){
				console.log(idx)
				this.Myauto = this.spDatas[idx].file_url
				console.log(this.Myauto)
			}, 
			toggleTabs: function(index) {
				this.nowIndex = index;
				if (index == 0) {
					this.spData.type = 1
				}
				if (index == 1) {
					this.spData.type = 3
				}
				if (index == 2) {
					this.spData.type = 4
				} 
				this.jangData.material_id = this.$route.query.material_id
				var jangData = this.jangData
				// this.$http.post(this.href + '/teachAction', jangData).then(response => { });
				
				
			},
			goHome() {
				this.spData.unit_id = this.$route.query.id
				var spDatas = JSON.stringify(this.spData);
				this.$http.post(this.href + '/studyMaterialList', spDatas).then(response => { 
					this.spDatas = response.data.data
					console.log(response.data.data)
					
				});
				this.$route.query.material_id = 1

			},
			// Click() {
			// 	this.Myauto = this.$route.query.nameId
			// },
			// 讲解
			spJang() {
				this.jangData.material_id = this.$route.query.material_id
				var jangData = this.jangData
				this.$http.post(this.href + '/teachAction', jangData).then(response => {
					if (response.body.code == '300') {
						this.$notify.info({
							title: '提示',
							message: '请先登陆账号！'
						});
						location.href = "#/no1";
					} else if (response.body.code == 200) {

						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
					} else {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
					}
				});
			},
			Comp() {
				// console.log(this.$route.query.id2)
				this.dpData.unit_list_id = this.id2
				var dpData = JSON.stringify(this.dpData);
				this.$http.post(this.href + '/completeMaterial', dpData).then(response => {
					if (response.body.code == '300') {
						this.$notify.info({
							title: '提示',
							message: '请先登陆账号！'
						});
						location.href = "#/no1";
					} else if (response.body.code == 200) {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
						
					} else {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
					}
					this.dpDatas = response.data
				});
			},
		}
	}
</script>

<style>
	@media screen and (max-width: 980px) {
		.xue_hears {
			height: 60px;
			padding: 0 20px;
			line-height: 60px;
			background: #f8d14f;
			background-size: 100% 150%;
			text-align: center;
		}

		.xue_hears span {
			float: left;
		}

		.tab_bot_pt p {
			font-size: 18px;
		}

		.tab_bot_pt .bot_sp {
			width: 50%;
			margin: 30px auto;
			/* border: 1px solid black; */
			text-align: center;
			/* padding: 10px 0; */
		}

		.bot_sp a {
			color: black;
		}

		.bot_sp span {
			color: black;
			border: 1px solid black;
			padding: 5px 15px;
			border-radius: 15px;
		}

		.span-sp {
			margin-top: 10px;
			font-size: 14px;
			padding: 5px 0;
		}

		.span-sp span {
			padding: 5px 15px;
			border: 1px solid black;
			border-radius: 15px;
			color: black;
		}

		.cont_le {
			width: 80px;
			height: 80px;
			float: left;
			background-color: salmon;
			margin-right: 20px;
		}

		.cont_ri {
			color: black;
			font-size: 18px;
			line-height: 30px;
			line-height: 40px;
			/* background-color: darkblue; */
		}

		.cont_ri span {
			padding: 5px 25px;
			border: 1px solid skyblue;
			font-size: 14px;
			border-radius: 20px;
			color: #00BFFF;
			margin: 0 3px;
		}


		.my_active {
			color: #0c0c0c;
			font-weight: bold;
			border-bottom: 1px solid #a6a6a6;
		}

		.xue_max {
			width: 100%;
			height: 100%;
			height: 100vh;
			position: position;
			padding-bottom: 50px;
			/* background-color: cornsilk; */
		}

		.xue_hear {
			height: 60px;
			padding: 0 20px;
			line-height: 60px;
			text-align: center;
		}

		.xue_hear span {
			float: left;
		}

		.cont_max {}

		.cont_max_hear {
			background-color: #ededed;
			color: ;
		}

		.tabs {
			width: 100%;
			height: 100%;
			display: flex;
		}

		.tabs .li-tab {
			height: 40px;
			margin: 5px;
			text-align: center;
			line-height: 40px;
			flex: 1;
		}

		/* 打印 */

		.foot_two {
			width: 100%;
			height: 60px;
			/* margin: 50px auto; */
			position: fixed;
			bottom: 0px;
			z-index: 3;
			background-color: #ebebeb;
		}

		.foot_two p {
			width: 50%;
			float: left;
			font-size: 18px;
			color: coral;
			line-height: 60px;
			text-align: center;
		}

		/* 视频类css */
		.divTab_one {
			width: 100%;
			height: 100px;
			margin: 10px auto;
			border-bottom: 1px solid salmon;
		}

		.tab_one_le,
		.tab_one_ri {
			width: 90px;
			height: 90px;
			float: left;
			margin-right: 20px;
			color: black;
		}

		.tab_one_le img {
			width: 100%;
			height: 100%;
		}

		.tab_bot_ri h3 {
			font-size: 15px;
			color: black;
			padding-top: 5px;
		}

		.tab_bot_ri h4 {
			font-size: 13px;
			color: darkblue;
			padding-top: 5px;
		}

		.tab_bot_ri p {
			font-size: 13px;
			color: #9e9e9e;
			margin: 5px 0px;
		}

		.tab_bot_ri span,
			{
			background-color: #3a91e7;
			margin: 0 10px 0 0;
			border-radius: 10px;
			padding: 6px 10px;
			font-size: 12px;
		}

		/* 音频 */
		.divTab_bner {
			width: 100%;
			height: 100%;
			background-color: paleturquoise;
		}

		.song_agg {
			width: 100%;
		}

		.divTat {
			width: 100%;
			height: 190px;
		}

		.divTab_le {
			width: 15%;
			height: 50px;
			float: left;
			background-color: salmon;
		}

		.divTab_ri {
			width: 75%;
			float: right;
		}

		.divTab_ri_top {
			height: 20px;
		}

		.divTab_tet {
			width: 90%;
			height: 50px;
			padding: 10px;
			margin: 0 auto;
			border: 1px solid #55aaff;
			border-radius: 10px;
		}

		.divTab_ri_bot {
			width: 70%;
			margin: 0 auto;
		}

		.divTab_ri_bot p {
			float: left;
			border: 1px solid #00BFFF;
			box-sizing: border-box;
			border-radius: 10px;
			text-align: center;
			width: 45%;
			margin: 2%;
			margin-top: 10px;
			font-size: 14px;
			color: #00BFFF;
			padding: 3px 0;
		}

		/* PPT */
		.divTab_text {
			width: 90%;
			margin: 0 auto;
			height: 50px;
			line-height: 20px;
			padding: 10px 0;
			font-size: 15px;
		}

		.divTab_text p {
			font-size: 14px;
			color: #b1b1b1;
		}

		.max_p {
			width: 100px;
			position: absolute;
			text-align: center;
			top: 20px;
			left: 50%;
			margin-left: -50px;
			/* left: 50%; */
		}


		.ppt_max {
			width: 100%;
			height: auto;
		}

		.bner_img {
			width: 100%;
			height: 90%;
		}

		.bner_img img {
			width: 100%;
			height: 100%;
		}

		.bner_tet {
			width: 90%;
			line-height: 30px;
			padding: 10px 0;
			margin: 0 auto;
		}

		.ppt_bner {
			width: 100%;
			height: 100%;
		}

		.ppt_bner h4 {
			font-size: 16px;
		}

		.ppt_bner p {
			font-size: 14px;
		}

		.bner_cont {
			width: 93%;
			height: 80px;
			margin: 0 auto;
			padding: 10px 0;
			padding: 10px 1%;
			background-color: cornsilk;
			border: 1px solid lawngreen;
		}

		.aud_img {
			width: 100%;
			height: 130px;
		}

		.aud_img img {
			width: 100%;
			height: 100%;
		}

		.audio audio {
			width: 100%;
		}
	}
</style>
