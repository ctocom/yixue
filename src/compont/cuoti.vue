<template>
	<div class="cuo_max">
		<div class="cuo_hears">
			<a href="#/no4">
				<p>
					< {{$route.query.name}}
				</p>  
			</a> 
			
			</div> 
		<div id="cu_top" class="ti_an">
			<div class="ti_an_a" v-for="(i,index) in cuoDatas">
				({{index+1}})
				<div v-html="i.title"> 
					<!-- {{i.title}} -->
				</div>
			</div>
		</div>

		<div class="di_btn">   
				<!-- <button v-print="'#cu_top'">打印</button> -->
				<a :href="this.cuUrl">
					<button >打印</button>
				</a> 
				 
			<router-link :to="{path:'/lisDan',query:{name:$route.query.id}}">
				<button>答案</button>
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
				cuoData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					user_err: '1',
					type: '1'
				},
				cuoDatas: {}, 
				cuUrl:''
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				this.cuoData.user_err = this.$route.query.id
				// this.cuoData.type = this.$route.query.id
				var cuoData = this.cuoData
        cuoData.course_id = this.$route.query.course_id
				this.$http.post(this.href + '/userErr', cuoData).then(response => {
					console.log(response.data.data.err_data)
					this.cuoDatas = response.data.data.err_data
					this.cuUrl = response.data.data.err_url
					if (response.body.code == '300') {
						alert('登录信息已失效，请重新登录')
					} 
				}); 
			},
		}
	};
</script>

<style>
	.cuo_hears {
		height: 60px;
		padding: 0 20px;
		line-height: 60px;
		background: #f8d14f;
		background-size: 100% 150%;
		text-align: center;
		margin: 0 0 20px;
	}

	.cuo_hears a {
		text-align: left;
	}

	.ti_an {
		width: 90%;
		height: auto;
		margin: 0 auto;
	}

	.ti_an_a {
		height: 120px;

	}

	.ti_an_a div {
		text-align: left;
	}

	.di_btn {
		width: 90%;
		height: 100px;
		margin: 20px auto;
	}

	button {
		width: 48%;
		height: 50%;
		float: left;
		margin-left: 1%;
		background-color: salmon;
		border: 1px solid salmon;
		box-sizing: border-box;
	}

	.cu_top {
		height: 50px;
		margin: 10px 0;
	}

	.cuo_max {
		width: 100%;
		height: 100vh;
		/* height: 100%; */
		background-color: #ffffff;
		position: position;
		z-index: 3;
		padding-bottom: 80px;
	}

	.cuo_hear {
		height: 39px;
		line-height: 39px;
		text-align: center;
	}

	.cuo_hear a {
		margin-left: 20px;
		float: left;
	}

	.cuo_max span {
		/* margin-right: 20px; */
		/* float: right; */
	}

	.cuo_active {
		border-bottom: 2px solid sandybrown;
	}

	.cuo_content {
		width: 90%;
		margin: 0 auto;
	}

	.cuo_cont_top {
		height: 27px;
		line-height: 27px;
		background-color: #ebebeb;
		font-size: 15px;
		display: flex;
	}

	.cuo_cont_top .cont_top_text {
		flex: 1;
		text-align: center;
	}

	.cuo_cont_top .cont_top_text li {
		width: 70%;
		margin: 0 auto;
	}

	.cuo_cont_bot {
		width: 88%;
		height: 87px;
		margin: 10px auto;
		border-radius: 5px;
		line-height: 38px;
		border: 1px solid #C0C0C0;
		box-shadow: 0 0 3px #C0C0C0;
	}

	.cuo_cont_p p {
		float: left;
		margin: 30px 0 0 26px;
		/* line-height: 60px; */
	}

	.cuo_cont_p span {
		margin: 30px 20px 0 0;
	}
</style>
