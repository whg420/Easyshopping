import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../../util/useStore'
const ChannelList: React.FC = () => {
    let store = useStore();
    let { home } = store;
    useEffect(() => {
        home.homeActions()
    }, [home])
    return useObserver(() => (
        <div className='title'>
        {
            home.channelList.map((item: any, index: number) => (
              <ul key={index} id={item.id}>
              <img src={item.icon_url} alt=""/>
              <li>{item.name}</li>
              </ul> 
            ))
        }
        </div>
            )
            )
        }
        
        export default ChannelList
