/*
 * @Author: your name
 * @Date: 2020-01-08 19:58:26
 * @LastEditTime : 2020-01-09 08:29:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\component\home\swiper.ts
 */

import React from "react"
import { useObserver } from 'mobx-react-lite'
import Swiper from '../component/home/swiper'
const Home: React.FC = () => {
    return useObserver(() => (
        <div className= 'main' >
            <Swiper/>
        </div>
    ))
}

export default Home
