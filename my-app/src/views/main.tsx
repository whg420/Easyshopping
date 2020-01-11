import React, { Component } from 'react'
import {Link} from "react-router-dom"

interface Props {
    
}
interface State {
    
}

export default class main extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="mainbox">
               
                <footer className="footer">
                  <span><Link to="/main/home">首页</Link></span>
                  <span><Link to="/main/special">专题</Link></span>
                  <span><Link to="/main/type">分类</Link></span>
                  <span><Link to="/main/shopping">购物车</Link></span>
                  <span><Link to="/main/my">我的</Link></span>              
                </footer>
            </div>
        )
    }
}
