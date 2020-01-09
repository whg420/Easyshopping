/*
 * @Author: your name
 * @Date: 2020-01-08 19:58:26
 * @LastEditTime : 2020-01-09 08:32:04
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\component\home\swiper.ts
 */

import React, { useEffect } from "react"
import { Carousel, WingBlank } from 'antd-mobile';
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const Swiper: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() =>(
        <div>
        
        </div>
    )
    )
}

export default Swiper
// <WingBlank>
// <Carousel 
// autoplay= { true } 
// infinite >
// {
//     home.bannerList.map((item: any, index: number) => (
//         <img src= { item.image_url } 
//     alt = "" 
//     key = { index }
//         style = {{ width: '100%', verticalAlign: 'top' }}
//         onLoad = {() => {
// window.dispatchEvent(new Event('resize'));
// }}
// />
//   ))
// }
// </Carousel>
// < /WingBlank>