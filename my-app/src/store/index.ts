/*
 * @Author: your name
 * @Date: 2020-01-06 14:11:26
 * @LastEditTime : 2020-01-07 10:28:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\index.ts
 */
// import React from 'react'
// 导入store
import Cart from './module/cart'
import Store from './module/store'
import Login from './module/login'
export default {
    store: new Store(),
    cart: new Cart(),
    login: new Login(),
    
}