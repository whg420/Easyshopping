import React, { useState, useEffect } from 'react'
import useStore from "../utils/useStore"
import {useObserver} from 'mobx-react-lite'
import back from '../icon/fanhui.svg'
import {History} from 'history'
interface PropType{
    history:History
 }
const Special:React.FC<PropType>=(Props)=>{
    
    let store = useStore();
    let {Special} = store
    
    useEffect(() =>{
       
    },[]);
    let go=()=>{
        Props.history.goBack()
       
     }
 
   console.log(Special)
    return useObserver(()=><>
       <div>
       <p className="header"><span  onClick={()=>go()}><img src={back} alt=""  style={{width:'16px',height:'16px'}}/></span><span>查看更多评论</span><span></span></p>
           <div className="commentItem">
               {
                  Special.commitList.length&&   
                  Special.commitList.map((item,index)=>{
                  return <div key={index} className="conmmitlist">
                  <p><span>{Object.values(item.user_info).length > 0 ?item.user_info.username:"匿名用户"}</span><span>{item.add_time}</span></p>
                  <p>{item.content}</p>
                  </div>
                  })
               }
              </div>
          
       </div>
    </>
    )
}
export default Special

   