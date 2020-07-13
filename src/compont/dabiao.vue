<template>
	<div class="da_max">
		<div class="xue_hears">
			<span>
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img src="../../images/ic.png" alt="">
					</div>
					知 识 回 顾
				</a>

			</span>
		</div>
		<div class="nei_bot" v-for="i in ptDatas">
			<router-link :to="{path:'/dabiaos',query:{unitId:i.unit_id,type:$route.query.type,}}">
				<div class="nei_bot_tet"> 
					<p style="width: 100%;text-align: center; font-size: 2vh;">{{i.name}}</p>
				</div>
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
				ptData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					unit_id: '1',
					section_id: '1',
					type: '2'
				},
				ptDatas: {}
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				this.ptData.type = this.$route.query.type
				this.ptData.unit_id = this.$route.query.unitId
				this.ptData.section_id = this.$route.query.secTionId
				var ptData = JSON.stringify(this.ptData);
				this.$http.post(this.href + '/unitListBefore', ptData).then(response => {
					console.log(response.data.data)
					this.ptDatas = response.data.data
					// this.unitIds = response.data.data.data.unit_id
					// console.log(this.unitIds)
					if (response.body.code == '300') {
						this.$notify.info({
							title: '提示',
							message: '登陆信息已失效！'
						});
					}

				});
			},
		}
	}
</script>

<style>
	a{
		width: 100%;
		height: 100%;
	}
	.xue_cont {
		height: 100px;
		font-size: 20px;
		text-align: center;
		line-height: 100px;
		border-bottom: 1px solid skyblue;
		background-color: lightpink;
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
	.da_max{
		position: relative;
		background-color: white;
		z-index: 4;
	}
</style>
