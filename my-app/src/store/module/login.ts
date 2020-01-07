/*
 * @Author: your name
 * @Date: 2020-01-07 09:37:30
 * @LastEditTime : 2020-01-07 10:11:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\module\login.ts
 */
import {observable,action} from 'mobx'
import {loginActions} from '../../api/index'
export default class Login{
    @observable
	@action
	async loginActions(){
		const res:any=await loginActions();
		console.log(res,'----------------res------------------->');
	}
}