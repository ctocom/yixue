<template>
	<div class="xue_max">
		<div class="xue_hears">  
			<span>
				<a href="javascript:history.go(-1);"> < </a>
			</span>
			<!-- {{$route.query.type}}
			{{$route.query.secTionId}} -->
		</div> 
		<div class="xue_cont" v-for="i in ptDatas">   
			<router-link :to="{path:'/dayin',query:{id:1,type:$route.query.type}}">
				 <div style="width: 20%;float: left;">
				 	{{i.unit_id}}
				 </div>
				 <div style="width: 80%;float: right;">
				 	{{i.name}}
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
				ptData:{
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					unit_id:'1',
					section_id:'1',
					type:'2'
				},
				ptDatas:{}
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				this.ptData.type = this.$route.query.type
				this.ptData.unit_id = this.$route.query.unitId
				this.ptData.section_id = this.$route.query.secTionId
				var ptData = JSON.stringify(this.ptData);
				this.$http.post(this.href + '/unitListBefore', ptData).then(response => {
					console.log(response.data.data)
					this.ptDatas = response.data.data
					
					
					if (response.body.code == '300') {
						this.$notify.info({
							title: '提示',
							message: '登陆信息已失效！'
						});
					}

					// this.xuData = response.data.data
				});
			},
		}
	}
</script>

<style>
	.xue_cont{
		height: 100px;
		font-size: 20px;
		text-align: center;
		line-height: 100px;
	}
	
</style>
