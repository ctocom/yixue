<template>
	<div class="dayin_max">
		<div class="xue_hears">
			<span @click="$router.go(-1)">
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div>
				</a>
			</span>
			<router-link :to="{path:'/xiaoxi',query:{id:$route.query.id,id2:this.$route.query.id}}">
				<div class="ling_ri">
				</div>
			</router-link>
		</div>


		<div id="printDiv" >
		     <div class="tihao" v-for="(i,index) in zjData">
				 <div class="tihao_le">
				 <h2>
					 ({{index+1}})
				 </h2>

				 </div>
				 <div class="tihao_ri" v-html="i.title">
					 {{i.title}}
				 </div>
			 </div>
		</div>

		<div class="yin_batn" @click="overAlt">
		<!-- !!!!!!! -->
			<a :href="this.papUrl">
				<!-- {{papUrl}} -->
				<button >打印</button>
			</a>
		<!-- !!!!!!! -->
		</div>

	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				daData:{
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'),
					unit_id:'1',
					unit_list_id:'2',
					type:''
				},
				zjData:{},
				paperId:'',
				papUrl:'',
				unitId:this.$route.query.id
			}
		},
		mounted() {
      console.log(this.$route.query);
			this.goHome()
    },
    watch: {
        //监听prop传的value，如果父级有变化了，将子组件的myValue也跟着变，达到父变子变的效果
        zjData(value) {
            this.$nextTick(function () { //这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
                if(this.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                    this.commonsVariable.initMathjaxConfig();
                }
                this.commonsVariable.MathQueue("printDiv");//传入组件id，让组件被MathJax渲染
            })
        }
    },
		methods: {
			goHome() {
				this.daData.type = this.$route.query.type
				this.daData.unit_id = this.$route.query.unitId
				this.daData.unit_list_id = this.$route.query.id2
				// this.daData.unit_list_id = this.$route.query.unitId
				var daData = JSON.stringify(this.daData);
				this.$http.post(this.href + '/userPaperAction', daData).then(response => {
					console.log(response.data.data)
					this.paperId = response.data.data.paper_id
					this.papUrl = response.data.data.paper_url

					// this.zjData = response.data.data.paper_data
					if(response.data && response.data.data.paper_id ){
						console.log(this.paperId)
					      this.zjData = response.data.data.paper_data
						 localStorage.setItem('paperId',response.data.data.paper_id)
					     }
					if(response.body.code == '300'){
						this.$notify.error({
						  title: '提示',
						  message: '请先登陆账号！'
						});
						location.href="#/no1";
					}
					if(response.body.code == 200){

					}else{
						this.$notify.info({
						  title: '提示',
						  message: response.body.msg
						});
					}
				});
			},
			overAlt(){
				console.log(this.paperId)
				if(!this.paperId){
				     this.$notify.error({
				       title: '提示',
				       message: '没有试卷！'
				     });
				     return
				    }
				   this.$router.push({
				     path:'/jilei',
				     query:{
				      papId:this.paperId,
				     }
				   })
			}

		}
	}
</script>

<style>
	/* @media screen and (max-width: 980px) { */
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
		.dayin_max{
			width: 100%;
			height: auto;
			line-height: 30px;
			padding-bottom: 80px;
			background-color: white;
			position: absolute;
			z-index: 4;
		}
		#printDiv{
			width: 85%;
			height: auto;
			margin: 0 auto;
			margin-bottom: 30px;
		}
		.yin_batn{
			width: 73%;
			height: 50px;
			margin:0px auto;

		}
		.yin_batn button{
			font-size: 18px;
			width: 100%;
			height: 100%;
			background-color: darkorange;
			border: none;
		}
		.ling_ri{
			margin-top: 8px;
			float: right;
			width: 22px;
			height:25px;
			color: black;
		}
		.tihao_le{
			padding-top:10px ;
		}
		.conter{
			padding-bottom: none;
		}
	/* } */
</style>
