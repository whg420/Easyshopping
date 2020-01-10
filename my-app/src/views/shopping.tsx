import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite'
import useStore from '../util/useStore'
import '../style/shop.css'
const Shopping: React.FC = () => {
    let store = useStore();
    let { shop } = store;
    useEffect(() => {
        shop.shopActions()
    }, [shop])
    return useObserver(() => (
        <div className='tabPageContent'>
          <div className='serviceList'>
          <li><span>★</span>30天无忧退货</li>
          <li><span>★</span>48小时快速退款</li>
          <li><span>★</span>满88元免邮费</li>
          </div>
          <div className='cartGoodsListWrap'>
          {
              shop.cartList.map((item:any,index:number)=><ul key={index}>
          
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==" alt=""/></li>
              <img src={item.list_pic_url} alt=""/>
              <li>
              <span>{item.goods_name}</span>
              <span>￥{item.retail_price}</span>
              </li>
              <li>x{item.session_id}</li>
              </ul>)
          }
          </div>
          <div className="cartGoodsDo">
          <div className='isCheckItem'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==" alt=""/>
          </div>
          <div className='cartMsgAll'>已选(<span>2</span>) ￥<span>718</span></div>
          <div className='cartAllDoButton'>编辑</div>
          <div className='cartAllDoButton_pay'>下单</div>
          </div>
        </div>
            )
            )
        }
        
        export default Shopping
