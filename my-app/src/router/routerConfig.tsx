import React from 'react'
import RouterView from './RouterView'
import Login from "../views/login"
import Home from "../views/home"
import Special from "../views/special"
import Shopping from "../views/shopping"
import Type from "../views/type"
import My from "../views/my"
import Main from "../views/main"
import Details from "../views/details"
import Titlecon from "../views/titlecon"
export default {
    routes: [{
        path: '/login',
        component: Login
    },{
        path: '/main',
        
        component: (props:any)=>(<>
             
            <RouterView routes={props.routes}></RouterView>
            <Main/>
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
        path:"/details/:id",
        component:Details
    },{
        path:"/titlecon",
        component:Titlecon
    },{
        from: '*',
        to: '/login'
    }]
}