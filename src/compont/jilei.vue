<template>
	<div class="jilei_max">
		<div class="over_max_hear">
			<!-- <div class="xue_hear">  
			</div>  -->
		</div>
		<div class="jilei_cont" > 
			<div class="cont_div">
				<router-link :to="{path:'/lucuo',query:{id:$route.query.id,id2:this.$route.query.id2,papId:this.$route.query.papId}}">
					<li></li>
					<p>录入错题</p> 
				</router-link>  
			</div>   
			<div class="cont_div">
				<router-link :to="{path:'/daan',query:{papId:this.$route.query.papId}}">
					<li></li>
					<p>查看答案</p> 
				</router-link>  
			</div>   
			<div class="cont_div">
				<router-link :to="{path:'/no4',query:{papId:$route.query.papId}}">
					<li></li>
					<p>打印错题</p> 
				</router-link>  
			</div>   
			<div class="cont_div">
				<router-link :to="{path:'/no3',query:{id:''}}">
					<li></li>
					<p>继续学习</p> 
				</router-link>  
			</div>   
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				// koData:['录入错题','查看答案','打印错题','继续学习']
			}
		},
		mounted(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.jilei_max{
		width: 80%;
		margin: 0 auto;
	}
	.jilei_max{
		height: 100vh;
		background-color: white;
		position: relative;
		padding-bottom: 50px;
	}
	.over_max_hear{
		width: 100%;
		height: 45%;
		background-image: url(../../images/banner_ren.png);
		background-size: 100% 100%;
	}
	.xue_hear{
		width: 100%;
		height: 100%;
	}
	.over_max_btn{
		width: 90%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		position: absolute;
		left: 5%;
		bottom: 30px;
		color: white;
		/* background-color:#fe9e30 ; */
	} 
	.jilei_cont{
		width: 90%;
		height: auto; 
		margin: 0 auto;
		/* border:1px solid #4f4f4f; */
		margin-top: 40px; 
		border-radius: 20px;  
		overflow: hidden;
	}
	.cont_div{
		width: 48%;
		height: 120px;
		border-radius: 20px;
		box-sizing: border-box;
		border: 1px solid lavender;
		float: left;
		text-align: center;
		margin: 1%;
	}
	.jilei_cont li{
		width: 62px;
		height: 62px;
		border-radius: 15px; 
		margin: 10px auto; 
	}
	.cont_div:nth-of-type(1) li{
		background-image: url(../../images/01.png);
		background-size: 100% 100%;
	}
	.cont_div:nth-of-type(2) li{
		background-image: url(../../images/02.png);
		background-size: 100% 100%;
	}
	.cont_div:nth-of-type(3) li{
		background-image: url(../../images/03.png);
		background-size: 100% 100%;
	}
	.cont_div:nth-of-type(4) li{
		background-image: url(../../images/04.png);
		background-size: 100% 100%;
	}
	.jilei_cont p{
		font-size: 13px;
		color: black;
	} 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@media screen and (max-width: 980px) {
		.jilei_max{
			width: 100%;
			height: 100vh;
			background-color: white;
			position: relative;
			padding-bottom: 50px;
		}
		.over_max_hear{
			width: 100%;
			height: 45%;
			background-image: url(../../images/banner_ren.png);
			background-size: 100% 100%;
		}
		.over_max_btn{
			width: 90%;
			height: 50px;
			text-align: center;
			line-height: 50px;
			position: absolute;
			left: 5%;
			bottom: 30px;
			color: white;
			/* background-color:#fe9e30 ; */
		} 
		.jilei_cont{
			width: 90%;
			height: auto; 
			margin: 0 auto;
			/* border:1px solid #4f4f4f; */
			margin-top: 40px; 
			border-radius: 20px;  
			overflow: hidden;
		}
		.cont_div{
			width: 48%;
			height: 120px;
			border-radius: 20px;
			box-sizing: border-box;
			border: 1px solid lavender;
			float: left;
			text-align: center;
			margin: 1%;
		}
		.jilei_cont li{
			width: 62px;
			height: 62px;
			border-radius: 15px; 
			margin: 10px auto; 
		}
		.cont_div:nth-of-type(1) li{
			background-image: url(../../images/01.png);
			background-size: 100% 100%;
		}
		.cont_div:nth-of-type(2) li{
			background-image: url(../../images/02.png);
			background-size: 100% 100%;
		}
		.cont_div:nth-of-type(3) li{
			background-image: url(../../images/03.png);
			background-size: 100% 100%;
		}
		.cont_div:nth-of-type(4) li{
			background-image: url(../../images/04.png);
			background-size: 100% 100%;
		}
		.jilei_cont p{
			font-size: 13px;
			color: black;
		} 
	}
</style>
