import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect, } from 'react-router-dom'
import Login from '../pages/Login/login'
import Admin from '../pages/Admin/admin'

class Router extends Component {
    render() {
        return (
            <HashRouter>
                {/* 导航 */}

                {/* 路由 */}
                <Switch>
                    <Redirect exact from='/' to='login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router