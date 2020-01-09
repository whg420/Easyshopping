/*
 * @Author: your name
 * @Date: 2020-01-08 11:29:23
 * @LastEditTime : 2020-01-09 19:51:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\api\module\home.ts
 */

import request from "../../util/request"
// 抛出loginActions
export let homeActions = () => {
    // 登录接口
    return request.get(`/`)
}