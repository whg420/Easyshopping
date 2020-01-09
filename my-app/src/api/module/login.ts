
/*
 * @Author: your name
 * @Date: 2020-01-07 09:12:44
 * @LastEditTime : 2020-01-08 10:51:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\api\module\login.ts
 */
import request from "../../util/request.js"
// 抛出loginActions
export let loginActions = (obj:any) => {
    console.log(obj,'------------------api--------login----->');

    // 登录接口
    return request("/auth/loginByMobile?mobile=15323807318&password=123456&sessionKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk")
}