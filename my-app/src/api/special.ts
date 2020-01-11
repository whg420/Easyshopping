/*
 * @Author: your name
 * @Date: 2020-01-07 10:50:41
 * @LastEditTime : 2020-01-10 14:10:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\api\special.ts
 */
import request from "../utils/request";
export let getSpecialData = (params: any)=>{
    return  request.get('/topic/list',{page:params.payload,size:params.size})
}
export let getDetails = (id:number)=>{
   return request.get('/topic/detail',{id:id})
}
export let getComment = (params:any)=>{
    return request.get('/comment/list',{valueId:params.valueId,typeId:params.typeId,page:params.page,size:params.size})
}
export let getRelated = (id:number)=>{
    return request.get('/topic/related',{id:id})
}
export let getCatalog = ()=>{
    return request.get('/catalog/index')
}