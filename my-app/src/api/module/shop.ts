/*
 * @Author: your name
 * @Date: 2020-01-09 13:50:07
 * @LastEditTime : 2020-01-10 15:46:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\api\module\shop.ts
 */

import request from "../../util/request"
// 抛出loginActions
export let shopActions = () => {
    // 登录接口
    return request.get("/cart/index",{
        params:{},
        headers:{ 'x-nideshop-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk' }
    })
}