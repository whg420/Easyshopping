/*
 * @Author: your name
 * @Date: 2020-01-07 09:37:30
 * @LastEditTime : 2020-01-08 09:49:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\module\login.ts
 */
import {observable,action} from 'mobx'
import {loginActions} from '../../api/index'
export default class Login{
	@observable 
	model:string=""
	@action
	async loginActions(obj:any){
		const res:any=await loginActions(obj);
		console.log(res,obj,'----------------store------action-----obj-------->');
	}
}