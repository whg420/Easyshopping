/*
 * @Author: your name
 * @Date: 2020-01-09 13:50:07
 * @LastEditTime : 2020-01-11 16:25:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\api\module\shop.ts
 */

import request from "../../util/request"
// 抛出loginActions
export let shopActions = () => {
    // 登录接口
    return request.get("/cart/index")
}