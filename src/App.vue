<template>
  <div id="app">  
    <div style=" position: relative;">
		<div class="tanbar">
		  <navs></navs>
		</div>
		<div class="conter"> 
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</div>
		<div class="footer">
			<div class="for_cen">
				<div class="fot_le">
					<ul v-for="i in liData">
						<li>{{i}}</li> 
					</ul>
				</div>
				<div class="fot_ri">
					<div class="fot_ri_img">
						<img src="../images/iwaer.png" alt="">
					</div>
					<p>扫描二维码</p>
					<p>了解更多</p>
				</div>
				<div class="jter">
					<a href="http://www.baixingvip.cn">技术支持 百姓科技</a> 
				</div>
			</div>
		</div>
	</div>  
  </div>
</template>
<script>  
	export default {
		data() {
			return { 
				liData:['联系我们','咨询电话：13785137371','联系邮箱：1095617139@qq.com','联系地址：石家庄市长安区广安大街']
			};
		},
		mounted() {
			
		},
		methods:{
			

		}, 
		watch:{
			 items:{
				  
			   }
		}
	  }
</script>


<style>  
	#app{
		/* max-width: 1024px; */
		height: 100vh;
		margin: 0 auto;
	}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}   
.xue_hears{
	position: relative;
	z-index: 4;
}
.fot_le{
	float: left;
	line-height: 27px;
	padding-top:50px ;
}
.fot_ri{
	float: right;
	line-height: 27px;
	padding-top:50px ;
}
.fot_ri_img{
	width:83px;
	height:76px;
	background:rgba(249,247,248,1);
	margin-bottom: 15px;
}
.fot_ri_img img{
	width: 100%;
	height: 100%;
}
.for_cen{
	width: 78%;
	height: 100%;
	margin: 0 auto;
	color: #fff; 
} 
	.footer{
		width: 100%;
		height:223px;
		background:rgba(24,40,55,1);
		display: block;
	}
	.tanbar{
		height: 50px;
		margin-bottom: 15px;
		position: relative;
		z-index: 3;
	}
	.jter{
		width: 300px;
		text-align: center;
		position: absolute;
		bottom: 30px;
		left: 50%;
		margin-left: -150px;
	}
	.jter a{color: #C0C0C0;font-size: 12px;}
	.logo img{
		width: 100%;
		height: 100%;
	}
@media screen and (max-width: 980px) {
	.conter{
		padding-top: 0px;
		/* padding-bottom: 53px; */
	}
	.tanbar{
		width:100%;
		position: fixed;
		bottom: 0; 
		height: 50px;
		display: block;
		z-index: 3;
		margin-bottom: 0px;
	}
	.footer{
		display: none;
	}
}
</style>
