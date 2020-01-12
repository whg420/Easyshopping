/*
 * @Author: your name
 * @Date: 2020-01-07 09:37:30
 * @LastEditTime : 2020-01-11 09:48:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\module\login.ts
 */
import {observable,action} from 'mobx'
import {loginActions} from '../../api/index'
import {loginListType} from '../types/loginType'

export default class Login{
	@observable 
	userList:loginListType[]=[]
	@action
	async loginActions(obj:any){
		const res:any=await loginActions(obj);
		// console.log(res,obj,'----------------store>res--------->');
		this.userList=res.data
		// console.log(res.data,'----------------store>res.data--------->');

	}
}