<template>
	<div class="xue_max">
		<div class="xue_hears">
			<p>消息</p>
		</div>
		<div class="xue_cont" v-for="item in xuData">
			<router-link :to="{path:'/jilu',query:{id:item.from_user_id}}">
				<div class="xue_cont_img">
					<!-- <img src="" alt=""> -->
				</div>
				<div class="xue_cont_tet">
					<div class="cont_tet_name">
						<p>{{item.title}}</p>
						<span>{{item.read_time}}</span>
					</div>
					<!-- <div class="cont_tet_cent">
						<p>
							{{item.content}}
						</p>
					</div> -->
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
				xuData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
				}
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				// this.xuData.from_user_id = this.$route.query.id
				var xuData = JSON.stringify(this.xuData);
				this.$http.post(this.href + '/systemList', xuData).then(response => {
					console.log(response.data.msg) 
					this.xuData = response.data.data
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
	/* @media screen and (max-width: 980px) {} */
	

	.xue_max {
		width: 100%;
		height: auto;
	}

	.xue_cont {
		width: 90%;
		height: 80px;
		margin: 15px auto;
	}

	.xue_cont_img {
		width: 60px;
		height: 60px;
		border-radius: 15px;
		overflow: hidden;
		float: left; 
		text-align: center; 
	}
	.xue_cont_img img{
		width: 100%;
		height: 100%;
	}

	.xue_cont_tet {
		width: 68%;
		float: left;
		padding-left: 2%;
	}

	.cont_tet_name {
		line-height: 40px;
		height: 40px;
	}

	.cont_tet_name p {
		font-size: 16px;
		color: #222222;
		font-weight: bold;
		float: left;


		width: 70%;
		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cont_tet_name span {
		float: right;
		font-size: 14px;
		color: #cccccc;
		width: 45px;
		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cont_tet_cent {
		width: 100%;
		overflow: hidden;
		font-size: 14px;
		color: #999999;

		white-space: nowrap;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
