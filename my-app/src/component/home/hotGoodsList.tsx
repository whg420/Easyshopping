/*
 * @Author: your name
 * @Date: 2020-01-08 19:58:26
 * @LastEditTime : 2020-01-09 10:09:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\component\home\swiper.ts
 */

import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const HotGoodsList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <div className="hotGoodsBox">
        <div className='hotGoodsTitle'>品牌供货商直供</div>
        <div className='hotGoodsWrap'>
        {
            home.hotGoodsList.map((item: any, index: number) => (
              <ul key={index} id={item.id} className='hotGoodsItem'>
                    <img src={item.list_pic_url} alt=""/>
                    <li>
                        <p>{item.name}</p>
                        <p>{item.goods_brief}</p>
                        <p>{item.floor_price}</p>
                    </li>
              </ul> 
            ))
        }
        </div>
        </div>
            )
            )
        }
        
        export default HotGoodsList
