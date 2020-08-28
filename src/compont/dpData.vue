<template>
	 <div class="dan">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div>
					答案
				</a>
			</span>
		</div>
		 <div class="paName">
			 <p>提示：请输入二级密码，获取答案</p>
			密码： <input type="password" v-model="dpData.seconds_password" placeholder="请输入密码">
		 </div>
		<div class="erJi" @click="goHome()">
			确定
		</div>
		<div id="lisDan" v-for="i in dpDatas">
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

		<div class="lisBtn">
			<a :href="cuUrl">
				<button class="erJi">打印</button>
				<i>请输入密码后进行打印！</i>
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
				dpData:{
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					paper_id: localStorage.getItem('paperId'),
					type  :'2',
					seconds_password:''
				},
				dpDatas:{},
				cuUrl:''
			}
		},
		mounted(){
			// this.goHome()
		},
    watch: {
        //监听prop传的value，如果父级有变化了，将子组件的myValue也跟着变，达到父变子变的效果
        dpDatas(value) {
            this.$nextTick(function () { //这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
                if(this.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                    this.commonsVariable.initMathjaxConfig();
                }
                this.commonsVariable.MathQueue("lisDan");//传入组件id，让组件被MathJax渲染
            })
        }
    },
		methods:{
			goHome() {
				var dpData = JSON.stringify(this.dpData);
				this.$http.post(this.href + '/standardErrorQuestion', dpData).then(response => {
					console.log(response.data.data)
					this.dpDatas = response.data.data.err_data
					this.cuUrl = response.data.data.err_url
					if(response.data.code == '100'){
						this.$notify.info({
						  title: '提示',
						  message: response.data.msg
						});
					}
					if(response.data.code == '0'){
						this.$notify.info({
						  title: '提示',
						  message: response.data.msg
						});
					}
					if(response.body.code == '300'){
						alert('登录信息已失效，请重新登录')
					}
				});
			},
		}
	}
</script>

<style>
#lisDan{
	line-height: 30px;
}
.lisBtn i{
	 font-size: 12px;color: #CCCCCC;
}
.paName{
	width: 80%;
	height: auto;
	margin: 0 auto;
	padding: 5px 0;
	font-size: 14px;
}
.paName input{
	width: 75%;
	height: 35px;
	margin: 10px 0;
	border: 1px solid black;
	padding-left: 4%;
}
.erJi{
	width: 60%;
	height: 50px;
	margin: 0 auto;
	text-align: center;
	background-color: sandybrown;
	line-height: 50px;
	font-size: 20px;
	color: white;
}
.div_p{
	line-height: 30px;
}
.lisBtn{
	width: 60%;
	height: 50px;
	margin: 50px auto;
	text-align: center;
	background-color: sandybrown;
	line-height: 50px;
	font-size: 20px;
	color: white;
}
.lisBtn button{
	width: 100%;
	height: 100%;
	/* background-color: salmon; */
	border: 1px solid salmon;
}
.dan{
	padding-bottom: 20px;
}
</style>
