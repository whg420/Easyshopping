
import React from "react"
import '../style/login.css'
import useStore from '../util/useStore'
import { useObserver } from 'mobx-react-lite'
// import { withRouter } from 'react-router-dom';
import {History} from 'history'
interface PropType{
    location:History.LocationState
    history:History
}
const Login: React.FC<PropType>= (props) => {
    let mobile:string = "15323807318";
    let password:string = "123456";
    
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
        let obj:any={
            mobile,
            password
        }
        login.loginActions(obj)
        props.history.push('/main/home')
        // props.history.push({pathname:"/main/home")      
        
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
