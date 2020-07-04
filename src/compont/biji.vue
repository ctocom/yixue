<template>
	<div class="bi_max">
		<div class="xue_hears">
			<!-- <router-link :to="{path:'/dangqian',query:{id:$route.query.id,id2:this.$route.query.id2}}"> -->
			<span>
				<a href="javascript:history.go(-1);">
					< </a> </span> <!-- </router-link> -->
						作业笔记
						<router-link :to="{path:'/xiaoxi',query:{id:$route.query.id,id2:this.$route.query.id}}">
							<div class="ling_ri">

							</div>
						</router-link>
		</div>
		<div class="bi_top">
			<div class="bi_banner">
				<img src="../../images/ban_03.png" alt="">
			</div>
			<div class="bi_tet">
				<h3>马老四和将讲语文</h3>
				<p>攘臂快乐的快熟及语文</p> 
			</div>
		</div>

		<div class="bi_cent" v-for="i in biData">
			<div class="bi_cent_img">
				<img :src=i.banner alt="">
			</div>
			<div class="bi_cent_ri">
				<h3>{{i.title}}</h3>
				<span style="background-color: royalblue;color: white;">
					<a :href="i.file_url">下载</a>
				</span>
				<span @click="spJang()">讲解</span>
				<a target="_blank" :href="'https://view.officeapps.live.com/op/view.aspx?src='+i.file_url"><span>预览</span></a>

			</div>
		</div>
		<div class="foot_two">
			<p @click="Cpte()">全部完成</p>
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
				comData: {
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'),
					type: '5',
					unit_id: '5'
				},
				biData: {},
				jangData: {
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'),
					material_id: '1',
				},
				jangDatas: {},
				dpData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					unit_list_id: '1'
				},
				dpDatas: [],
			}
		},
		mounted() {
			this.Comp()
		},
		methods: {
			Comp() {
				this.comData.unit_id = this.$route.query.id
				var comData = JSON.stringify(this.comData);
				this.$http.post(this.href + '/studyMaterialList', comData).then(response => {
					console.log(response.data.data)
					this.biData = response.data.data
					if (response.body.code == '300') {
						this.$notify.error({
							title: '提示',
							message: '请先登陆账号！'
						});
						location.href = "#/no1";
					}
					if (response.body.code == 200) {

					} else {
						this.$notify.info({
							title: '提示',
							message: response.body.msg
						});
					}

				});
				this.$route.query.material_id = 1
			},
			spJang() {
				this.jangData.material_id = this.$route.query.material_id
				var jangData = this.jangData
				this.$http.post(this.href + '/teachAction', jangData).then(response => {
					console.log(this.jangData.material_id)
					alert(response.data.msg)
				});
			},
			Cpte() {
				this.dpData.unit_list_id = this.$route.query.id2
				var dpData = JSON.stringify(this.dpData);
				console.log(dpData)
				// return
				this.$http.post(this.href + '/completeHomework', dpData).then(response => {
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
			}
		}
	}
</script>

<style>
	.bi_max {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: white;
		z-index: 3;
	}

	.bi_top {
		height: 220px;
		/* background-color: red; */
	}

	.bi_tet {
		width: 95%;
		height: 30px;
		margin: 10px auto;
		line-height: 20px;
	}

	.bi_tet h3 {
		font-size: 16px;
	}

	.bi_tet p {
		font-size: 12px;
	}

	.bi_banner {
		width: 100%;
		height: 160px;
		margin: 10px 0;
		/* background-image: url(../../dist/ban_03.png); */
		background-size: 100% 100%;
	}

	.bi_banner img {
		width: 100%;
		height: 100%;
	}

	.bi_cent {
		width: 88%;
		height: 80px;
		padding: 10px 10px;
		margin: 10px auto;
		border-radius: 10px;
		border: 1px solid skyblue;
		position: relative;
	}

	.bi_cent_img {
		width: 50px;
		height: 50px;
		position: absolute;
		top: 50%;
		margin-top: -25px;
		left: 20px;
		float: left;
		margin-right: 20px;
	}

	.bi_cent_img img {
		width: 100%;
		height: 100%;
	}

	.bi_cent_ri {
		margin-left: 80px;
	}

	.bi_cent_ri h3 {
		font-size: 16px;
		margin-bottom: 10px;
		overflow: hidden;
		/* background-color: #000000; */
	}

	.bi_cent_ri span {
		font-size: 14px;
		color: royalblue;
		padding: 3px 20px;
		border-radius: 15px;
		border: 1px solid royalblue;
		line-height: 40px;
	}

	.bi_cent_ri span a {
		color: white;
	}

	/*打印  */
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

	.spa_img {
		float: right;
		margin-top: 10px;
		font-size: 12px;
	}

	.spa_img img {
		width: 25px;
		height: 30px;
	}
</style>
