/*
 * @Author: your name
 * @Date: 2020-01-07 10:44:26
 * @LastEditTime: 2020-01-07 11:54:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Easyshopping\my-app\src\utils\request.ts
 */
import axios from 'axios'
const instance = axios.create({
  baseURL:'http://169.254.19.79:8888'
})

const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
export default class HttpUtil {
  static get (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.errno === 0){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
