import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const NewGoodsList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <div className="newGoodsBox">
        <div className='newGoodsTitle'>新品首发</div>
        <div className='newGoodsWrap'>
        {
            home.newGoodsList.map((item: any, index: number) => (
              <ul key={index} id={item.id} className='newGoodsItem'>
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
            )
            )
        }
        
        export default NewGoodsList
