/*
 * @Author: your name
 * @Date: 2020-01-09 13:52:37
 * @LastEditTime : 2020-01-09 13:57:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\types\shopType.ts
 */
export interface cartListType {
    id: number,
    user_id: number,
    session_id: string,
    goods_id: number,
    goods_sn: string,
    product_id: number,
    goods_name: string,
    market_price: number,
    retail_price: number,
    number: number,
    goods_specifition_name_value:string,
    goods_specifition_ids: string,
    checked: number,
    list_pic_url:string
}