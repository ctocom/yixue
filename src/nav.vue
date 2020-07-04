<template>
	<div class="nav_max">
		<div class="nav_content">
		</div>
		<div class="nav">
			<ul class="nav_ul"> 
				<a href="#/" class="add">
					<i class="el-icon-s-home"></i>
					<p>首页</p> 
				</a> 
				<a href="#/no3">
					<i class="el-icon-s-management"></i>
					<p>学习</p>  
				</a> 
				<a href="#/jilu">
					<i class="el-icon-s-order"></i>
					<p>消息</p> 
				</a>
				<a href="#/no4">
					<i class="el-icon-s-custom"></i>
					<p>我的</p> 
				</a> 
				
			</ul>
		</div> 
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				categoryIndex: 1, 
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome(){ 
				var atl = $('.123').text()
				console.log(atl)
				if(atl == '作业'){ 
					console.log('123')
				}
			}
			
			
		}
	};
	$(document).ready(function() {
		$(".nav_ul a").click(function() {
			$(this).addClass("add").siblings().removeClass("add");   
		}); 
	});

</script>

<style scoped> 
*{
	padding: 0;
	margin: 0;
	list-style: none;
}
	.nav ul {
		width: 80%; 
		margin: 0 auto;
		text-align: center;
		line-height: 60px; 
		display: flex;
	} 
	.nav ul a{
		flex:1;
	}
	@media screen and (max-width: 980px) {

		.add{  
			color: #FFA305;
			} 
		.add i{ 
			font-size: 5vh;
		}
		.add p{ 
			font-size: 2vh;
		}
		.nav_max {
			width: 100%;  
		}

		.nav_content {
			width: 98%;
			height: 100%;
		}

		.nav {
			width: 100%;  
			height: 10vh;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #eeeeee;
			z-index: 1;
		}
		.nav .nav_ul{
			width: 100%;  
			height: 100%; 
			font-size: 10px;
			line-height: 20px;
		} 
		.nav_ul a{
			flex: 1;
			padding-top: 10px; 
		}
		.nav_ul a p{
			font-size: 2vh;
		}
		.nav_ul a i{ 
			font-size: 5vh;
		} 
		a{
			display: inline-block;
			width: 100%;
			height: 100%;  
			color: #9c9c9c;
		}  

	}
</style>
