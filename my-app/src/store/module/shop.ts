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
	}
}