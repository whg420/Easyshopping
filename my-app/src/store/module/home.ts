/*
 * @Author: your name
 * @Date: 2020-01-07 09:37:30
 * @LastEditTime : 2020-01-09 08:14:50
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
        console.log(res,'----------------store------homestore------------->');
        console.log(res.banner,'-banner---------------store------homestore-----------banner-->');
        this.bannerList=res.banner;
        this.brandList=res.brandList
        this.categoryList=res.categoryList
        this.channelList=res.channel
        this.hotGoodsList=res.hotGoodsList
        this.newGoodsList=res.newGoodsList
        this.topicList=res.topicList
	}
}