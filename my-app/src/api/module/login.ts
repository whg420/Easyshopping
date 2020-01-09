
/*
 * @Author: your name
 * @Date: 2020-01-07 09:12:44
 * @LastEditTime : 2020-01-09 16:28:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\api\module\login.ts
 */
import request from "../../util/request"
// 抛出loginActions
export let loginActions = (obj:any) => {
    // let mobile:any=obj.mobile
    // let password:any=obj.password
    console.log(obj,'------------------api--------login----->');
    // 登录接口
    return request.post('/auth/loginByMobile',obj)
}