import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const CategoryList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <>
        {
            home.categoryList.map((item: any, index: number) => (
                <div className="cateGoryGoodsBox" >
                <div className='cateGoryGoodsTitle' key={index}>{item.name}</div>
                <div className='cateGoryGoodsWrap'>
                {
                    item.goodsList.map((item: any, index: number) =>(
                        <ul key={index} id={item.id} className='cateGoryGoodsItem'>
                        <img src={item.list_pic_url} alt=""/>
                        <li>
                            <p>{item.name}</p>
                            <p>{item.retail_price}</p>
                        </li>
                  </ul> 
                    ))
                }
             
              </div>
              </div>

            ))
        }
        </>
            )
            )
        }
        
        export default CategoryList
