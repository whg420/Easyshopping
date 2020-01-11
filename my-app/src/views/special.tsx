import React, { useState, useEffect } from 'react'
import useStore from "../utils/useStore"
import {useObserver} from 'mobx-react-lite'
import {Link} from 'react-router-dom'
import '../style/special/special.css'
const page = 4;
const size = 5;

const Special:React.FC=()=>{
    
    let store = useStore();
    let {Special} = store
    
    useEffect(() =>{
       Special.getSpecialData({page,size})
    },[Special]);
  
    return useObserver(()=><>
       <div className="content">
           <div>
           { 
             Special.list.map((item:any,index)=>{
                return <div key={index} className="topicItem">
                    <Link to={`/details/${item.id}`}>
                    <p className="imgLazy">
                          <img src={item.scene_pic_url} alt=""/>
                          </p>
                      <p className="title">{item.title}</p>
                      <p className="subtitle">{item.subtitle}</p>
                      <p className="price">{item.price_info}元起</p>

                    </Link>
                    
                </div>
             })
           }
           </div>
          
       </div>
    </>
    )
}
export default Special

   