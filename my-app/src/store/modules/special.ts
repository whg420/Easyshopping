/*
 * @Author: your name
 * @Date: 2020-01-06 14:12:15
 * @LastEditTime : 2020-01-10 15:31:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\modules\special.ts
 */
//引入类型
import {specialType} from '../types/special'
import {detailsType,catalogType} from '../types/detailsType'
//引入mobx
import {observable, action, computed} from 'mobx'
import {getSpecialData,getDetails,getComment,getRelated,getCatalog} from '../../api/special'
export default class special{
   @observable
   list:specialType[]=[];
   
   @observable
   detailsList:detailsType[]=[]

   @observable
   commitList:detailsType[]=[]
  
   @observable
   relatedList:detailsType[]=[]
   
   @observable
   catalogList:catalogType[]=[]
   
   @observable
   catalogTabList:catalogType[]=[]
   @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        // console.log(res,'res');
        
        this.list = res.data;
    }
    @action
    async getDetails(id:number){
        const res:any=await getDetails(id)
        // console.log(res,'8888888888')
        this.detailsList.push(res)
    }
    @action
    async getComment(obj:object){
        const res:any=await getComment(obj)
        // console.log(res,'zhanghuihjjhjjn')
        this.commitList=res.data
    }
    @action
    async getRelated(id:number){
        const res:any=await getRelated(id)
        // console.log(res,'zhanghuihjjhjjn')
        this.relatedList=res
    }
    
    @action
    async getCatalog(){
        const res:any=await getCatalog()
        console.log(res,'zhanghuihjjhjjn')
        this.catalogList=res.categoryList
        this.catalogTabList=res.currentCategory
    }
}