<template>
	<div class="cuo_max">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div>
					<p style="float: right;color: black;"> {{$route.query.name}} </p>
				</a>
			</span>
		</div>
		<div id="cu_top" class="ti_an">
			<div class="ti_an_a" v-for="(i,index) in cuoDatas">
				({{index+1}})
				<div style="text-align: left;line-height: 22px ;" v-html="i.title"> {{i.title}} </div>
				<div style="text-align: left;line-height: 22px;position: relative;" v-for="j in i.children" >
    				({{j.group_id}})
    				<div v-html="j.title">
    					{{j.title}}
    				</div>
					 <!-- <h3> 题目：{{this.questionToOptions.Question.body}}</h3> -->
				</div>
				  <div @click="cuJan(index)" class="btn">讲解</div>
			</div>
		</div>

		<div class="mask" v-if="showModal" @click="showModal=false"></div>
		<div class="pop" v-if="showModal">
			<div @click="showModal=false" class="btns"><span style="float: left;">讲解</span> × </div>
			<div class="brVio">
				<video controls  :src="teUrl"></video>
			</div>
		</div>
		<div class="di_btn">
			<a :href="this.cuUrl"> <button >打印</button> </a>
			<router-link :to="{path:'/lisDan',query:{name:$route.query.id,courseId:this.$route.query.course_id}}">
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
				showModal: false,
				cuUrl:'',
				teUrl:''
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
			cuJan:function(int){
				this.showModal = true
				console.log(int)
				this.teUrl = this.cuoDatas[int].teach_url
				console.log(this.teUrl)
			}
		},
    watch: {
        //监听prop传的value，如果父级有变化了，将子组件的myValue也跟着变，达到父变子变的效果
        cuoDatas(value) {
            //this.questionToOptions = value;
            this.answer = '';
            this.$nextTick(function () { //这里要注意，使用$nextTick等组件数据渲染完之后再调用MathJax渲染方法，要不然会获取不到数据
                if(this.commonsVariable.isMathjaxConfig){//判断是否初始配置，若无则配置。
                    this.commonsVariable.initMathjaxConfig();
                }
                this.commonsVariable.MathQueue("cu_top");//传入组件id，让组件被MathJax渲染
            })
        },
        answer(newVal) {
            this.$emit('trouble', newVal)
        }
    },
	};
</script>

<style>
strong{
	height: 100%;
}
/* p{line-height: 40px;margin: 5px 0 5px 10px;} */
.kfformula{
	display: inline-block;
	width:30px;
	margin-bottom: -10px;
}
.mask {
	  background-color: rgba(45, 45, 45, 0.6);
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  z-index: 1
	}
	.pop {
	  background-color: #e8e8e8;
	  position: fixed;
	  top: 100px;
	  left: 5%;
	  width: 66%;
	  height: auto;
	  z-index: 2
	}
	.pop video{
		width: 100%;
		height: 80%;
	}
	.btn {
		width: 55px;
		height: 20px;
		text-align: center;
		color: white;
		line-height: 20px;
		text-align: center;
		background-color: #00aeff;
		font-size: 12px;
		border-radius: 10px;
		position: absolute;
		right: 10px;
		top: 16px;
	}
	.btns{
		width: 90%;
		height: 35px;
		padding: 1% 5%;
		text-align: right;
		line-height: 35px;
		font-size: 18px;
		font-weight: bold;
		background: #ccc;
		margin-bottom: 10px;
	}
	.cu_jan{
		float: right;
		color: seagreen;
		border: 1px solid #000000;
		padding: 3px 5px;
		border-radius: 10px;
	}
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
		height: auto;
		position: relative;
		padding-top: 15px;
		border-bottom: 1px dashed #00BFFF;
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
		font-size: 16px;
		font-weight: bold;
		color: white;
		margin-left: 1%;
		background-color: salmon;
		border: 1px solid salmon;
		box-sizing: border-box;
	}

	.brVio{
		width: 100%;
		height: auto;
		max-height: 30vh;
	}
	.brVio video{
		width: 100%;
		height: 100%;
	}
	.cu_top {
		height: 50px;
		margin: 10px 0;
	}

	.cuo_max {
		width: 100%;
		/* height: 100vh; */
		background-color: #ffffff;
		position: relative;
		z-index: 4;
		padding-bottom: 40px;
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
	}

	.cuo_cont_p span {
		margin: 30px 20px 0 0;
	}
	@media screen and (max-width: 980px) {
		.pop {
		  background-color: #e8e8e8;
		  position: fixed;
		  top: 100px;
		  left: 5%;
		  width: 90%;
		  height: auto;
		  z-index: 2
		}
		.pop video{
			width: 100%;
			height: 100%;
		}
	}

</style>
