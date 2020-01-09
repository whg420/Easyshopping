/*
 * @Author: your name
 * @Date: 2020-01-08 19:58:26
 * @LastEditTime : 2020-01-09 09:33:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\component\home\swiper.ts
 */

import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const BrandList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <div className="brandBox">
        <div className='brandTitle'>品牌供货商直供</div>
        <div className='brandWrap'>
        {
            home.brandList.map((item: any, index: number) => (
              <ul key={index} id={item.id} className='brandItem'>
                    <img src={item.new_pic_url} alt=""/>
                    <li>
                        <p>{item.name}</p>
                        <p>{item.floor_price}元起</p>
                    </li>
              </ul> 
            ))
        }
        </div>
        </div>
            )
            )
        }
        
        export default BrandList
