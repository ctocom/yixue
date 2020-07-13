<template>
	<div class="dang_max">
		<div class="xue_hears">
			<span >
				<!-- {{$route.query.paperId}} -->
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					当 前 学 习 
				</a> 
			</span> 
			<p style="float: right;color: black;"> {{navName}}</p>
		</div>  
		<div class="dang_cont"> 
<!-- 循环任务 -->

			<div class="log_lops">
				<div class="block">
					<el-carousel>
						<el-carousel-item v-for="item in bannerList" :key="item">
							<img :src=item alt=""> 
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div class="xun_max">
<!-- banner图 -->
				<div class="dang_banner" v-for="i in imgs1">
					<img :src=i alt="">
				</div>
<!-- 第一次学习 -->
				<div class="xunhuan" v-for="(item,index) of unitList">
					<div style="height: 20px;">
						<span style=" height: 13px; margin: 0 10px; border: 2px solid skyblue; float: left;"></span>
						<p style="float: left;color: skyblue;">第 一 循环任务</p>
					</div>
					<div class="xun_cont">
						<div class="xun_cont_top">
							<div class="xun_jindu">
								<div class="nei_jindu">
									<p>{{item.complete_rate}}</p>
								</div>
							</div> 
							<p class="xun_cont_top_p"><span style="color: sandybrown;">{{complete_rate}}</span>  {{item.name}}</p>
						</div>
						<div class="xun_cont_bot">
							<div class="xun_cont_data" v-for="j in item.module" @click="li_cli(j)">
								<p>{{j.is_complete}}</p>
								<div class="tet_img_max">
									<div class="cont_bot_img">
										<div class="icon_img">
											<img :src=j.icon alt="">
										</div>
									</div> 
									<router-link :to="{path:'/dangqian',query:{it_id:$route.query.it_id,cu_id:$route.query.cu_id,unitId:item.unit_id,paperId:item.paper_id}}">
										<div class="cont_bot_tet">
											{{j.name}}
										</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
<!-- 两次复习 -->
				<div style="height: 20px;">
					<span style=" height: 13px; margin: 0 10px; border: 2px solid skyblue; float: left;"></span>
					<p style="float: left;color: skyblue;">第 二 循环任务</p>
				</div>
				<div class="xun_cont">
					<div class="xun_cont_top">
						<div class="xun_jindu">
							<div class="nei_jindu">
								<p>0</p>
							</div>
						</div>
						<p class="xun_cont_top_p">循环复习</p>
					</div>
					<div class="gu_tet">
						<div>
							<router-link :to="{path:'/ppt',query:{unitId:this.unitId,secTionId:this.secTionId,type:'2'}}">
								检测二
							</router-link>
						</div> 
						<div>
							<router-link :to="{path:'/dabiao',query:{unitId:this.unitId,secTionId:this.secTionId,type:'2'}}">
								<div>达标</div>
							</router-link>
						</div>
					</div>
				</div>
				
				<div style="height: 20px;">
					<span style=" height: 13px; margin: 0 10px; border: 2px solid skyblue; float: left;"></span>
					<p style="float: left;color: skyblue;">第 三 循环任务</p>
				</div>
				<div class="xun_cont">
					<div class="xun_cont_top">
						<div class="xun_jindu">
							<div class="nei_jindu">
								<p>0</p>
							</div>
						</div>
						<p class="xun_cont_top_p">循环复习</p>
					</div>
					<div class="gu_tet">
						<div>
							<router-link :to="{path:'/ppt',query:{unitId:this.unitId,secTionId:this.secTionId,type:'3'}}">
								检测三
							</router-link>
						</div>
						<div>
							<router-link :to="{path:'/dabiao',query:{unitId:this.unitId,secTionId:this.secTionId,type:'3'}}">
								达标
							</router-link>
						</div>
						
						
					</div>
				</div>
<!-- 内容 -->
				<div class="neirong">
					<div class="nei_top" style="height: 4vh;">
						<p>全部内容</p>
						<span style="float: right; color: red;font-size: 2vh;">{{navName}}</span>
					</div>
					<div class="nei_bot" v-for="i in unit_info">
						<div class="nei_bot_tet">
							<p style="float: left;font-size: 2vh;">{{i.name}}</p>

							<div class="box" style="float: right;"> 
								<i :class="{red: i.complete_num >= 1}">{{i.complete_num >= 1}}</i>
								<i :class="{red: i.complete_num >= 2}">{{i.complete_num >= 2}}</i>
								<i :class="{red: i.complete_num >= 3}">{{i.complete_num >= 3}}</i>
							</div>
						</div>
					</div>
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
				// red:
				href: gloal.userApi,
				dqData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					section_id: this.$route.query.it_id
				},
				complete_rate:'', 
				paperId:'',
				navName: [],
				navLame: [],
				unitId: [],
				secTionId: [],
				unitList: {},
				unit_info: {},
				ID: [],
				img1: {
					type: '5'
				},
				imgs1: [],
				img2: {
					type: '1'
				},
				bannerList: {}
			}
		},
		created(options) { 
			this.goHome(),
				this.changeClass(1),
				this.dqData.section_id = this.$route.query.id1
			$(".nav_ul a").eq(1).addClass("add").siblings().removeClass("add")
		},


		methods: {
			goHome() {
				var dqData = JSON.stringify(this.dqData);
				this.$http.post(this.href + '/unitList', dqData).then(response => {
					console.log(response.data.data)
					this.unitList = response.data.data.unit_list
					this.unit_info = response.data.data.unit_info
					this.navName = response.data.data.nav_name
					this.complete_rate = response.data.data.complete_rate 
					this.paperId = this.unitList[0].paper_id

					this.unitId = response.data.data.unit_id
					this.secTionId = response.data.data.section_id


					this.$nextTick(() => {
						this.newClick()
					});

					if (response.body.code == '300') {
						alert('登录信息已失效，请重新登录')
					}
					var img1 = JSON.stringify(this.img1);
					this.$http.post(this.href + '/imagesInfo', img1).then(response => {
						this.imgs1 = response.data.data
					});

					var img2 = JSON.stringify(this.img2);
					this.$http.post(this.href + '/imagesInfo', img2).then(response => {
						this.bannerList = response.data.data
					});
				});

			},
			
			enClick(){
				this.$router.push({
					name: '/yinover',
					query: {
						id: this.$route.query.it_id,
						id2: index.unit_list_id,
						unitId: this.unitId
					}
				})
			},

			changeClass(num) {
				for (let i = 0; i < 3; i++) {
					if (num > i) {
						$(".box i").eq(i).addClass('red')
					}
				}
			},


			newClick() {

				// console.log('123')
				$('.nei_jindu').each(function() {
					// console.log($(this).html())
					if ($(this).text() == 0) {
						$(this).css('width', '0%')
					}
					if ($(this).text() == 25) {
						$(this).css('width', '25%')
					}
					if ($(this).text() == 50) {
						$(this).css('width', '50%')
					}
					if ($(this).text() == 75) {
						$(this).css('width', '75%')
					}
					if ($(this).text() == 100) {
						$(this).css('width', '100%')
						// console.log('123')
					}
				})
				$('.xun_cont_data p').each(function() {
					// console.log($(this).text())
					if ($(this).text() == 1) {
						$(this).css("background", "#ffdd57");
					}
					if ($(this).text() == 0) {
						$(this).css("background", "##9c9c9c");
					}
				});
				// console.log($('.net_span i').text())

				$('.net_span').each(function() {
					if ($(this).text() == 0) {
						$('.net_span i').css('background', '#ccc')
					}
					if ($(this).text() == 1) {
						$('.i_one').css('background', '#e7c413')
					}
					if ($(this).text() == 2) {
						$('.i_two').css('background', 'red')
					}
					if ($(this).text() == 3) {
						$('.i_thr').css('background', 'green')
					}
				})
			},
			li_cli(index) {
				console.log(index.name)
				if (index.name == '学习') {
					this.$router.push({
						name: '/shipin',
						query: {
							id: this.$route.query.it_id,
							id2: index.unit_list_id,
							unitId: this.unitId
						}
					})
				}
				if (index.name == '作业') {
					this.$router.push({
						name: '/biji',
						query: {
							id: this.$route.query.it_id,
							id2: index.unit_list_id,
							unitId: this.unitId
						}
					})
				}
				if (index.name == '检测') {
					console.log(this.$route.query);
					this.$router.push({
						name: '/dayin',
						query: {
							id: this.$route.query.it_id,
							id2: index.unit_list_id,
							unitId: this.unitId
						}
					})
				}
				if (index.name == '达标') {
					console.log(this.$route.query.paperId);
					this.$router.push({
						name: '/yinover',
						query: { 
							paperId: this.$route.query.paperId
						}
					})
				}
			}
		}
	}
</script>

<style>
	.xun_max {
		width: 80%;
		margin: 0 auto;
	}

	.red {
		background-color: green;
	}

	.box {
		position: absolute;
		top: 50%;
		margin-top: -10px;
		right: 20px;
		border-radius: 10px;
	}

	.box i {
		display: inline-block;
		width: 16px;
		height: 16px;
		color: transparent;
		border-radius: 9px;
		border: 1px solid #c3c3c3;
	}

	.span_i i {
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #CCCCCC;
	}

	.gu_tet div {
		height: 5vh;
		line-height: 5vh;
		border-radius: 3vh;
		flex: 1;
		margin: 0 10px;
		text-align: center;
		background-color: #9c9c9c;
		color: white;
		font-size: 2vh;
	}

	.gu_tet div a {
		color: white;
	}

	.gu_tet {
		width: 60%;
		height: 50px;
		display: flex;
		float: right;
	}

	.my_le {
		line-height: 7vh;
		color: black;
	}

	.my_le div {
		width: 10px;
		height: 15px;
		float: left;
		margin-right: 10px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.dang_max {
		width: 100%;
		background-color: white;
		position: relative;
		margin-bottom: 11vh;
	}

	.dang_hear {
		display: none;
	}

	.dang_cont {
		width: 100%;
		margin: 0 auto;
	}

	.dang_banner {
		height: 22vh;
		width: 100%;
		border-radius: 10px;
		margin: 20px auto;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
	}
	.el-carousel__container{
		height: 42vw;
	}
	.xunhuan,
	.neirong {
		height: 220px;
		height: auto;
		margin-top: 20px;
	}

	.xun_cont {
		width: 100%;
		height: 15vh;
		border-radius: 30px;
		background-color: #f3faff;
		margin: 10px 0;
		box-shadow: 0 0 3px 1px #e5e5e5;
	}

	.xun_cont_top {
		height: 5vh;
		margin-bottom: 20px;
		padding-top: 10px;
		line-height: 3vh;
	}

	.xun_cont_top_p {
		line-height: 15vh;
		margin-left: 20px;
		font-size: 2.5vh;
	}

	.xun_cont_bot {
		width: 70%;
		height: 5vh;
		float: right;
		display: flex;
	}

	.xun_cont_bot .xun_cont_data {
		margin: 0 5px;
		flex: 1;
		float: left;
		font-size: 14px;
		line-height: 30px;
		border-radius: 25px;
		background-color: #9c9c9c;
	}

	.xun_cont_data {
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		text-align: center;
		overflow: hidden;
		position: relative;
	}

	.xun_cont_data a {
		line-height: 5px;
	}

	.tet_img_max {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		float: left;
		color: white;
		font-size: 14px;
	}

	.xun_cont_data p {
		width: 100%;
		height: 100%;
		float: left;
		color: transparent;
	}

	.xun_jindu {
		width: 68%;
		float: right;
		height: 8px;
		margin: 25px 10px 0;
		border-radius: 10px;
		background-color: #9c9c9c;

	}

	.nei_jindu {
		width: 0;
		transition: .7s;
		height: 100%;
		color: white;
		border-radius: 10px;
		background: repeating-linear-gradient(120deg, #ff8102, #ff8102 7px, #ff9d3a -1px, #ff9d3a 14px);
		position: relative;
	}

	.nei_jindu p {
		color: white;
		height: 24px;
		width: 20px;
		font-size: 10px;
		text-align: center;
		line-height: 20px;
		border-radius: 50%;
		background-image: url(../../images/ic_top.png);
		background-size: 100% 100%;
		position: absolute;
		right: -10px;
		bottom: 6px;
	}

	.nei_top { 
		margin: 0 0 25px;
		height: 4vh;
		font-size: 2vh;
	}

	.nei_top span {
		display: none;
	}

	.nei_top p {
		font-size: 24px;
	}

	.nei_bot {
		height: 11vh;
		line-height: 11vh;
		border-radius: 30px;
		background-color: #f3faff;
		margin: 10px 0;
		box-shadow: 0 0 3px 1px #e5e5e5;
		position: relative;
	}

	.nei_bot_tet {
		width: 90%;
		height: 100%;
		margin: 0 auto;
	}

	.cont_bot_img,
	.cont_bot_tet {
		width: 45%;
		height: 5vh;
		line-height: 5vh;
		float: left;
		color: white;
		font-size: 2vh;
	}

	.icon_img {
		width: 3vh;
		height: 3vh;
		margin: 0 auto;
		padding-top: 0.6vh;
	}

	.icon_img img {
		width: 100%;
		height: 100%;
	}




































	@media screen and (max-width: 980px) {
		.log_lops{
			display: none;
		}
		.xun_max {
			width: 95%;
			margin: 0 auto;
		}

		.red {
			background-color: green;
		}

		.box {
			position: absolute;
			top: 50%;
			margin-top: -10px;
			right: 20px;
			border-radius: 10px;
		}

		.box i {
			display: inline-block;
			width: 16px;
			height: 16px;
			color: transparent;
			border-radius: 9px;
			border: 1px solid #c3c3c3;
		}

		.span_i i {
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background-color: #CCCCCC;
		}

		.gu_tet {
			width: 100%;
		}

		.gu_tet div {
			height: 5vh;
			line-height: 5vh;
			border-radius: 3vh;
			flex: 1;
			margin: 0 10px;
			text-align: center;
			background-color: #9c9c9c;
			color: white;
			font-size: 2vh;
		}

		.gu_tet div a {
			color: white;
		}

		.gu_tet {
			height: 50px;
			display: flex;
		}

		.my_le {
			line-height: 7vh;
			color: black;
		}

		.my_le div {
			width: 10px;
			height: 15px;
			float: left;
			margin-right: 10px;
		}

		img {
			width: 100%;
			height: 100%;
		}

		.dang_max {
			width: 100%;
			background-color: white;
			position: relative;
			margin-bottom: 11vh;
		}

		.dang_hear {
			display: block;
			width: 96%;
			height: 7vh;
			padding: 0 2%;
			background-image: url(../../images/1.jpg);
			background-size: 100% 130%;
			line-height: 7vh;
			font-size: 2vh;
		}

		.dang_cont {
			width: 100%;
			margin: 0 auto;
		}

		.dang_banner {
			height: 12vh;
			width: 100%;
			border-radius: 10px;
			margin: 10px auto;
			overflow: hidden;
		}

		img {
			width: 100%;
			height: 100%;
		}

		.xunhuan,
		.neirong {
			height: 220px;
			height: auto;
			margin-top: 20px;
		}

		.xun_cont {
			width: 100%;
			height: 13vh;
			border-radius: 30px;
			background-color: #f3faff;
			margin: 10px 0;
			box-shadow: 0 0 3px 1px #e5e5e5;
		}

		.xun_cont_top {
			height: 5vh;
			margin: 10px 0 0;
			line-height: 3vh;
		}

		.xun_cont_top_p {
			padding: 10px 0 0 20px;
			float: left;
			font-size: 2vh;

			line-height: 2vh;
			margin-left: 0px;
		}

		.xun_cont_bot {
			width: 100%;
			height: 5vh;
			display: flex;
		}

		.xun_cont_bot .xun_cont_data {
			margin: 0 5px;
			flex: 1;
			float: left;
			font-size: 14px;
			line-height: 30px;
			border-radius: 25px;
			background-color: #9c9c9c;
		}

		.xun_cont_data {
			width: 80%;
			margin: 0 auto;
			border-radius: 10px;
			text-align: center;
			overflow: hidden;
			position: relative;
		}

		.xun_cont_data a {
			line-height: 5px;
		}

		.tet_img_max {
			position: absolute;
			top: 0px;
			width: 100%;
			height: 100%;
			float: left;
			color: white;
			font-size: 14px;
		}

		.xun_cont_data p {
			width: 100%;
			height: 100%;
			float: left;
			color: transparent;
		}

		.xun_jindu {
			width: 57%;
			float: right;
			height: 8px;
			margin: 10px 10px 0;
			border-radius: 10px;
			background-color: #9c9c9c;

		}

		.nei_jindu {
			width: 0;
			transition: .7s;
			height: 100%;
			color: white;
			border-radius: 10px;
			background: repeating-linear-gradient(120deg, #ff8102, #ff8102 7px, #ff9d3a -1px, #ff9d3a 14px);
			position: relative;
		}

		.nei_jindu p {
			color: white;
			height: 18px;
			width: 18px;
			font-size: 10px;
			text-align: center;
			line-height: 15px;
			border-radius: 50%;
			background-image: url(../../images/ic_top.png);
			background-size: 100% 100%;
			position: absolute;
			right: -6px;
			bottom: 6px;
		}

		.nei_top {
			border-bottom: 1px dashed #C0C0C0;
			margin: 0 0 25px;
			height: 4vh;
			font-size: 2vh;
		}

		.nei_top p {
			color: red;
			font-size: 2vh;
			float: left;
		}

		.nei_top span {
			display: inline-block;
		}

		.nei_bot {
			height: 9vh;
			line-height: 9vh;
			border-radius: 30px;
			background-color: #f3faff;
			margin: 10px 0;
			box-shadow: 0 0 3px 1px #e5e5e5;
			position: relative;
		}
		
		.nei_bot_tet {
			width: 90%;
			height: 100%;
			margin: 0 auto;
		}

		.cont_bot_img,
		.cont_bot_tet {
			width: 45%;
			height: 5vh;
			line-height: 5vh;
			float: left;
			color: white;
			font-size: 2vh;
		}

		.icon_img {
			width: 3vh;
			height: 3vh;
			margin: 0 auto;
			padding-top: 0.6vh;
		}

		.icon_img img {
			width: 100%;
			height: 100%;
		}
	}
</style>
