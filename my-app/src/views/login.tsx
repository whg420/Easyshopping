/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../style/login.css'
import {useObserver} from 'mobx-react-lite'
import useStore from '../util/useStore'


interface Props {

}
interface State {

}

interface ItemType {
    mobile:string,
    password:string
}
interface PropsType {
    mobileChange?:Function,
    passwordChange?:Function
}
// onClick={this.ck.bind(this)}
    // mobileChange(event: any)=>{
    //     // let val = event.target
    //     // mobile = val.value
    // },
    // passwordChange=(event: any)=>{
    //     // let val = event.target;
    //     // password = val.value
    // },
    // ck=()=>{

    // }
const login: React.FC<PropsType> = props =>{
    // let store=useStore();

    return useObserver(()=><>{
        // let { mobile, password } = this.state
            <div className='main'>
                <div className='logo'>
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
                </div>
                <div className='loginMain'>
                    <div className='inputWrap'>
                        <input type="number" 
                        placeholder="请输入手机号码" 
                        defaultValue={mobile} 
                        onChange={this.mobileChange.bind(this)} />
                    </div>
                    <div className='inputWrap'>
                        <input type="password" 
                            placeholder="请输入登录密码" 
                            defaultValue={password} 
                            onChange={this.passwordChange.bind(this)} />
                    </div>
                    <button >登录</button>
                </div>
            </div>
    }</>)
    
}

export default login