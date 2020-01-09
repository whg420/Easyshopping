import React from 'react'
import RouterView from './RouterView'
import Login from "../views/login"
import Home from "../views/home"
import Special from "../views/special"
import Shopping from "../views/shopping"
import Type from "../views/type"
import My from "../views/my"
export default {
    routes: [{
        path: '/login',
        component: Login
    },{
        path: '/main',
        component: (props:any)=>(<>
            <RouterView routes={props.routes}></RouterView>
        </>),
        children: [{
            path: '/main/home',
            component: Home
        },
        {
            path: '/main/special',
            component: Special
        },{
            path: '/main/type',
            component: Type
        },{
            path: '/main/shopping',
            component: Shopping
        },{
            path: '/main/my',
            component: My
        }]
    },{
        from: '*',
        to: '/login'
    }]
}