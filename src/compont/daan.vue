<template>
	<div class="dan">
		<div class="xue_hears">
			<router-link :to="{path:'/jilei',query:{id:$route.query.id, papId:this.$route.query.papId}}">
				<span>
					< </span> </router-link> <router-link :to="{path:'',query:{}}">
						<span style="float: right;"> </span>
			</router-link>
			<!-- {{$route.query.papId}} -->
		</div>
		<div class="paName">
			<p>提示：请输入二级密码，获取答案</p>
			密码： <input type="password" v-model="danData.seconds_password" value="请输入密码">
		</div>
		<div class="erJi" @click="goHome()">
			确定
		</div>
		<div class="div_p" id="div-p" v-for="i in danDatas">

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
		<div class="erJi">
			<a :href="da_fil">
				<button >打印</button>
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
				danData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					paper_id: '',
					seconds_password: null
				},
				danDatas: {}
			}
		},
		mounted() {
			// this.goHome()
    },
    watch: {
        //监听prop传的value，如果父级有变化了，将子组件的myValue也跟着变，达到父变子变的效果
        danDatas(value) {
            this.$nextTick(function () { //这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
                if(this.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                    this.commonsVariable.initMathjaxConfig();
                }
                this.commonsVariable.MathQueue("div-p");//传入组件id，让组件被MathJax渲染
            })
        }
    },
		methods: {
			goHome() {
				this.danData.paper_id = this.$route.query.papId
				var danData = JSON.stringify(this.danData);
				this.$http.post(this.href + '/paperQuestion', danData).then(response => {
					console.log(response.data.data.paper_question_list)
					this.danDatas = response.data.data.paper_question_list
					this.da_fil = response.data.data.answer_url
					if (JSON.stringify(response.data.code, null, 4) == 200) {

					} else {
						this.$notify.info({
							title: '提示',
							message: response.data.msg
						});
					}

				});
			},
		}
	}
</script>

<style>
	.paName {
		width: 80%;
		height: auto;
		margin: 0 auto;
		padding: 5px 0;
		font-size: 14px;
	}

	.paName input {
		width: 75%;
		height: 35px;
		margin: 10px 0;
		border: 1px solid black;
		padding-left: 4%;
	}

	.erJi {
		width: 45%;
		height: 40px;
		margin: 20px auto;
		text-align: center;
		background-color: sandybrown;
		line-height: 40px;
		color: white;
		font-size: 20px;
	}

	.erJi button {
		width: 100%;
		height: 100%;
		color: white;
		font-size: 20px;
		border: 1px solid lightblue;
		background-color: sandybrown;
	}

	.div_p {
		line-height: 30px;
	}

	.dan {
		padding-bottom: 50px;
	}
</style>
