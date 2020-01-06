/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import '../style/login.css'
interface Props {

}
interface State {

}

class login extends Component<Props, State> {
    state = {
        mobile: '',
        password: ''
    }

    render() {
        let { mobile, password } = this.state
        return (
            <div className='main'>
                <div className='logo'>
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
                </div>
                <div className='loginMain'>
                    <div className='inputWrap'>
                        <input type="number" placeholder="请输入手机号码" defaultValue={mobile} onChange={this.mobileChange.bind(this)} />
                    </div>
                    <div className='inputWrap'>
                        <input type="password" placeholder="请输入登录密码" defaultValue={password} onChange={this.passwordChange.bind(this)} />
                    </div>
                    <button onClick={this.ck.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
    mobileChange(event: any) {
        let val = event.target
        this.state.mobile = val.value
    }
    passwordChange(event: any) {
        let val = event.target;
        this.state.password = val.value
    }
    ck() {
        console.log(this.state);
    }
}

export default login
