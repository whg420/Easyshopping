import React, { useState, useEffect } from 'react'
import useStore from "../utils/useStore"
import {useObserver} from 'mobx-react-lite'
import '../style/type/index.css'
import { catalogType } from '../store/types/detailsType'

const Special:React.FC=()=>{
    
    let store = useStore();
    let {Special} = store
    
    useEffect(() =>{
       Special.getCatalog()
    },[Special]);
    let tablist=(item: catalogType)=>{
        console.log(item)
    }
  console.log(Special.catalogList)
    return useObserver(()=><>
       <div className="typediv">
           <div className="header">
             <div>搜索商品，共239款好物</div>
           </div>
          <div className="typecontent">
              <div className="left">
                  {
                      Special.catalogList.map((item,index)=>{
                      return <span onClick={()=>tablist(item)}>{item.name}</span>
                      })
                  }
              </div>
              <div className="right">

                  {

                    //   Special.catalogList.map((item,index)=>{
                    //       return <div key={index}>
                    //           {
                                  
                    //               item.subCategoryList.map((item: any,index: any)=>{
                    //                   return <p>{item.name}</p>
                    //             })
                    //           }
                    //       </div>
                          
                    //       })
                    //   })
                  }
              </div>
          </div>
       </div>
    </>
    )
}

export default Special

   