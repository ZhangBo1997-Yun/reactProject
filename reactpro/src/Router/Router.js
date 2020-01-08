import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'
import loadable from '../utils/loadable'  //路由懒加载
const Login = loadable(() => import('../pages/Login/Login'))
const Register = loadable(() => import('../pages/Login/Register'))
const Admin = loadable(() => import('../pages/Admin/admin'))

class Router extends Component {
    render() {
        return (
            <HashRouter>
                {/* 导航 */}

                {/* 路由 */}
                <Switch>
                    <Redirect exact from='/' to='login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router