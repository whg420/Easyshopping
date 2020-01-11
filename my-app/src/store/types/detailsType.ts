/*
 * @Author: your name
 * @Date: 2020-01-08 10:59:55
 * @LastEditTime : 2020-01-10 15:26:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\store\types\detailsType.ts
 */
export interface detailsType{
    id:number,
    content:string,
    title:string,
    add_time:string,
    username:string,
    user_info:any,
    
    scene_pic_url: string,
    

}
export interface catalogType{
    id:number,
    name:string,
    subCategoryList:any,
    wap_banner_url:string,
    banner_url:string,
    categoryList:any,
    currentCategory:any
   
}