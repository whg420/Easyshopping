/*
 * @Author: your name
 * @Date: 2020-01-08 11:29:23
 * @LastEditTime: 2020-01-08 11:30:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\api\module\home.ts
 */

import request from "../../util/request.js"
// 抛出loginActions
export let homeActions = () => {
    // 登录接口
    return request("/")
}