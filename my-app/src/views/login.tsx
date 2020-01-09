/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import '../style/login.css'
import { useObserver } from 'mobx-react-lite'
import useStore from '../util/useStore'
// import login from '../store/module/login';

// interface ItemType {
//     mobile: string,
//     password: string
// }
// interface PropsType {
//     mobileChange?: Function,
//     passwordChange?: Function
// }

const Login: React.FC = () => {
    let mobile:string = "";
    let password:string = "";
    let store = useStore();
    let { login } = store;
    const mobileChange = (event: any) => {
        let val = event.target
        mobile = val.value
    }
    const passwordChange = (event: any) => {
        let val = event.target;
        password = val.value
    }
    const ck = () => {
        console.log(mobile,password);
        let obj:any={
            mobile,
            password
        }
        login.loginActions(obj)
    }
    return useObserver(()=>(
        <div className='main'>
        <div className='logo'>
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
        </div>
        <div className='loginMain'>
        <div className='inputWrap'>
            <input type="number"
                placeholder="请输入手机号码"
                defaultValue={mobile}
                onChange={mobileChange} />
        </div>
        <div className='inputWrap'>
            <input type="password"
                placeholder="请输入登录密码"
                defaultValue={password}
                onChange={passwordChange} />
        </div>
        <button onClick={ck}>登录</button>
        </div>
        </div>
    ))
}

export default Login
