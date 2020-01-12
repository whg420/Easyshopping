/*
 * @Author: your name
 * @Date: 2020-01-09 13:51:25
 * @LastEditTime : 2020-01-11 16:35:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\module\shop.ts
 */
import {observable,action} from 'mobx'
import {shopActions} from '../../api/index'
import {cartListType} from '../types/shopType'

export default class Login{
	@observable 
	cartList:cartListType[]=[];
	@action
	async shopActions(){
		const res:any=await shopActions();
		console.log(res,'----------------store------action------------->');
		this.cartList=res.cartList
		console.log(res.cartList);
		
	}
}