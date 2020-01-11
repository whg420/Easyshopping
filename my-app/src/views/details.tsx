import React, { useState, useEffect } from 'react'
import useStore from "../utils/useStore"
import {useObserver} from 'mobx-react-lite'
// import {Link} from 'react-router-dom'
// import '../style/special/special.css'
import pencil from '../icon/pencil.svg'
import back from '../icon/fanhui.svg'
import {History} from 'history'
const  page= 1
const  size =5
interface PropType{
   history:History
}
const Special:React.FC<PropType>=(Props)=>{
   
    let store = useStore();
    let {Special} = store
    const {match} = Props as {match?:any}
    useEffect(() =>{
       const {match} = Props as {match?:any}
    //    console.log(match.params.id);
       Special.getDetails(match.params.id)
       Special.getComment({valueId:match.params.id,typeId:1,page,size})
       Special.getRelated(match.params.id)
    },[]);
    let go=()=>{
       Props.history.goBack()
      
    }

   let titlecon=()=>{
      Props.history.push("/titlecon")
      Special.getComment({valueId:match.params.id,typeId:1})
   }
    console.log(match)
    console.log(Special)
    return useObserver(()=><>
       <div>
           <div className="topicontent">
              {      
              Special.detailsList.length&&         
                 Special.detailsList.map((item,index)=>{
                     return <div key={index} className="topicdetail">
                 <p className="header"><span  onClick={()=>go()}><img src={back} alt=""  style={{width:'16px',height:'16px'}}/></span><span>{item.title}</span><span></span></p>
                      <div dangerouslySetInnerHTML={{__html:item.content}} className="topicimg"></div>
                      </div>
                 })
                  
              }
               <div className="titleLine">
                     <span>
                        精选留言
                     </span>
                     <span>
                        <img src={pencil} alt=""  style={{width:'16px',height:'16px'}} />
                     </span>
              </div>
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
              <div className="morecommit"  onClick={()=>titlecon()}>查看更多评论</div>
              
            <div className="relatedtItem">
            <div className="morerelated">推荐专题</div>
               {
                  Special.relatedList.length&&
                  Special.relatedList.map((item,index)=>{
                     return <div key={index} className="relatedlist">

                          <div><img src={item.scene_pic_url} alt=""/></div>
                           <div>{item.title}</div>
                     </div>
                  })
               }
            </div>
          
           </div>
          
           
       </div>
    </>
    )
}
export default Special

   