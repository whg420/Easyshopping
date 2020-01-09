/*
 * @Author: your name
 * @Date: 2020-01-08 19:58:26
 * @LastEditTime : 2020-01-09 10:38:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\component\home\swiper.ts
 */

import React from "react"
import { useObserver } from 'mobx-react-lite'
import Swiper from '../component/home/swiper'
import TopicList from '../component/home/topicList'
import NewGoodsList from '../component/home/newGoodsList'
import HotGoodsList from '../component/home/hotGoodsList'
import ChannelList from '../component/home/channelList'
import BrandList from '../component/home/brandList' 
import CategoryList from '../component/home/categoryList' 
import '../style/home.css'
const Home: React.FC = () => {
    return useObserver(() => (
        <div className= 'main' >
            <Swiper/>
            <ChannelList/>
            <BrandList/>
            <NewGoodsList/>
            <HotGoodsList/>
            <TopicList/>
            <CategoryList/>

           
        </div>
    ))
}

export default Home