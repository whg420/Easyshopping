/*
 * @Author: your name
 * @Date: 2020-01-07 09:12:44
 * @LastEditTime : 2020-01-07 10:30:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\api\module\login.ts
 */
import request from "../../util/request"
// 抛出loginActions
export let loginActions = () => {
    // 登录接口
    return request("/auth/loginByMobile?mobile=15323807318&password=123456")
}