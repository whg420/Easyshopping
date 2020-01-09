/*
 * @Author: your name
 * @Date: 2020-01-06 14:11:26
 * @LastEditTime: 2020-01-08 09:12:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\util\useStore.ts
 */
import {useContext} from 'react'
import StoreContext from '../context/StoreContext'
export default ()=>useContext(StoreContext);
