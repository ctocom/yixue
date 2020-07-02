<template>
	<div class="shi_max">
		
		no
		
		
		<div class="xue_hear">
			<router-link :to="{path:'/lucuo',query:{id:'1'}}">
				<span>
					<
				</span>
			</router-link>
			<router-link :to="{path:'',query:{id:'1'}}">
				<p>
					[英语]
				</p>
			</router-link> 
		</div>
		ID：{{$route.query.id}} 
		
		<div class="shi_cont">
			<h3>试题如下：</h3>
			<div class="shi_cont_cent" v-for="i in xubData">
				
				<p> {{i.name}}: </p>
				<br>
				<h4>{{i.title}}</h4> 
				<h6>{{i.radios}}</h6>  
				<!-- {{i}} -->
			</div>
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				shiUser: { 
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'),
					paper_id:'2'
				},
				xubData:{}
			}
		}, 
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				this.shiUser.paper_id = this.$route.query.id
				var shiUser = JSON.stringify(this.shiUser);
				this.$http.post(this.href + '/paperQuestion', shiUser).then(response => {
					this.xubData = response.data.data.paper_question_list
					console.log(response.data.data.paper_question_list)
					if(response.body.code == '300'){
						alert('登录信息已失效，请重新登录')
					} 
				});
			}
		},
	}
</script>

<style>
	.shi_max{ }
	.shi_cont{
		width: 90%;
		margin: 0 auto;
	}
</style>
