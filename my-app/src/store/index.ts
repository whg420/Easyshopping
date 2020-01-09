/*
 * @Author: your name
 * @Date: 2020-01-06 14:11:26
 * @LastEditTime : 2020-01-09 13:52:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\index.ts
 */
/*
 * @Author: your name
 * @Date: 2020-01-06 14:11:26
 * @LastEditTime : 2020-01-08 11:28:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\index.ts
 */
// import React from 'react'
// 导入store
import Cart from './module/cart'
import Login from './module/login'
import Home from './module/home'  
import Shop from './module/shop'  
export default {
    cart: new Cart(),
    login: new Login(),
    home: new Home(),
    shop: new Shop(),
}