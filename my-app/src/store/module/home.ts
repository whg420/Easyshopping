/*
 * @Author: your name
 * @Date: 2020-01-07 09:37:30
 * @LastEditTime : 2020-01-09 11:24:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\module\login.ts
 */
import {observable,action} from 'mobx'
import {homeActions} from '../../api/index'
import {bannerType,brandLstType,categoryListType,channelType,hotGoodsListType,newGoodsListType,topicListType} from '../types/homeType'
export default class Home{
	@observable 
    bannerList:bannerType[]=[];
	@observable 
    brandList:brandLstType[]=[];
	@observable 
    categoryList:categoryListType[]=[];
	@observable 
    channelList:channelType[]=[];
	@observable 
    hotGoodsList:hotGoodsListType[]=[];
	@observable 
    newGoodsList:newGoodsListType[]=[];
	@observable 
    topicList:topicListType[]=[];
	@action
	async homeActions(){
        const res:any=await homeActions();
        // console.log(res,'----------------store------homestore------------->');
        this.bannerList=res.banner;
        // console.log(res.banner,'-banner---------------store------homestore-----------banner-->');
        this.channelList=res.channel
        // console.log(res.channel,'-banner---------------store------homestore-----------banner-->');
        this.brandList=res.brandList
        // console.log(res.brandList,'-banner---------------store------homestore-----------banner-->');
        this.newGoodsList=res.newGoodsList
        // console.log(res.newGoodsList,'-banner---------------store------homestore-----------banner-->');
        this.hotGoodsList=res.hotGoodsList
        // console.log(res.hotGoodsList,'-banner---------------store------homestore-----------banner-->');
        this.topicList=res.topicList
        // console.log(res.topicList,'-banner---------------store------homestore-----------banner-->');
        this.categoryList=res.categoryList
        // console.log(res.categoryList,'-banner---------------store------homestore-----------banner-->');
	}
}