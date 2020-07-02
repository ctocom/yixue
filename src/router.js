
import Vue from 'vue'
import Router from 'vue-router'
import no1 from './compont/no1.vue'

import no2 from './compont/no2.vue'
import lucuo from './compont/lucuoti.vue'
import shiti from './compont/shiti.vue'
import shipin from './compont/shipin.vue' 
import biji from './compont/biji.vue' 
import shezhi from './compont/shezhi.vue'
import cuoti from './compont/cuoti.vue'
import tiku from './compont/tiku.vue'
import jilei from './compont/jilei.vue' 
import dati from './compont/dati.vue'
import xiaoxi from './compont/xiaoxi.vue'
import jilu from './compont/jilu.vue'
import ppt from './compont/ppt.vue'

import no3 from './compont/no3.vue'
import no3_net from './compont/no3_net.vue'
import dangqian from './compont/dangqian.vue'
import dayin from './compont/dayin.vue'
import yinover from './compont/yinover.vue' 
import daan from './compont/daan.vue'


import no4 from './compont/no4.vue' 
import password from './compont/password.vue'
import cuopass from './compont/cuopass.vue'
import myjifen from './compont/myjifen.vue'
import myData from './compont/myData.vue'
import lisDan from './compont/lisDan.vue'
import qkong from './compont/qkong.vue'


 Vue.use(Router)
 var routes = [{
	 path:'/no1',
	 name:'index',
	 component:no1
 },
 {
 	 path:'/',
 	 name:'no2',
 	 component:no2,  
 }, 
 {
 	 path:'/no3',
	 name:'no3',
	 component:no3, 
 }, 
 {
	path:"/no3_net",
	 name:"/no3_net",
	 component:no3_net,
	 children:[
	 	{path:':id',name:"no3_net",component:no3_net}
	 ]
 },
 {
 	path:"/dangqian",
 	 name:"/dangqian",
 	 component:dangqian, 
 },
 {
 	path:"/dayin",
 	 name:"/dayin",
 	 component:dayin, 
 },
 {
 	path:"/xiaoxi",
 	 name:"/xiaoxi",
 	 component:xiaoxi, 
 },
 {
 	path:"/ppt",
 	 name:"/ppt",
 	 component:ppt, 
 },
 {
 	path:"/jilu",
 	 name:"/jilu",
 	 component:jilu, 
 },
 {
 	path:"/yinover",
 	 name:"/yinover",
 	 component:yinover, 
 },
 {
 	path:"/daan",
 	 name:"/daan",
 	 component:daan, 
 },
 {
 	path:'/cuoti',
 	 name:'/cuoti',
 	 component:cuoti, 
 },
 {
 	path:'/tiku',
 	 name:'/tiku',
 	 component:tiku, 
 },
 {
 	path:'/lucuo',
 	 name:'/lucuo',
 	 component:lucuo, 
 }, 
 {
 	path:'/shiti',
 	 name:'/shiti',
 	 component:shiti, 
 }, 
 {
 	path:'/jilei',
 	 name:'/jilei',
 	 component:jilei, 
 },
 {
 	path:'/shipin',
 	 name:'/shipin',
 	 component:shipin,
	 children:[
	 	{path:':id',name:'shipin',component:shipin}
	 ]
 },
 {
 	path:'/biji',
 	 name:'/biji',
 	 component:biji, 
 },
 {
 	path:'/shezhi',
 	 name:'/shezhi',
 	 component:shezhi,
 	 children:[
 	 	{path:':id',name:'shezhi',component:shezhi}
 	 ]
 },
 {
 	path:"/dati",
 	 name:"/dati",
 	 component:dati,
 	 children:[
 	 	{path:':id',name:"dati",component:dati}
 	 ]
 },
 {
 	 path:'/no4',
 	 name:'no4',
 	 component:no4, 
 },
 {
 	 path:'/myData',
 	 name:'myData',
 	 component:myData, 
 }, 
 {
 	 path:'/lisDan',
 	 name:'lisDan',
 	 component:lisDan, 
 },
 
 {
 	 path:'/qkong',
 	 name:'qkong',
 	 component:qkong, 
 },
 {
 	 path:'/password',
 	 name:'password',
 	 component:password, 
 },
 {
 	 path:'/cuopass',
 	 name:'cuopass',
 	 component:cuopass, 
 },
 {
 	 path:'/myjifen',
 	 name:'myjifen',
 	 component:myjifen, 
 }
 ]



var router = new Router({
	routes
})



export default router





