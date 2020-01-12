

import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
import { Carousel, WingBlank } from 'antd-mobile';
const TopicList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <div className="topGoodsBox">
        <div className='topGoodsTitle'>新品首发</div>
        <div className='topGoodsWrap'>
        <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
        >
          {
            home.topicList.map((item, index) => (
              <img
                src={item.item_pic_url}
                alt=""
                key={index}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
                className="spaceImg"
              />
          ))
        }
        </Carousel>
      </WingBlank>
        </div>
        </div>
            )
            )
        }
        
        export default TopicList
