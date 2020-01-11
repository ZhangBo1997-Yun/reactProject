import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect, } from 'react-router-dom'
import loadable from '../utils/loadable'  //路由懒加载
const Home = loadable(() => import('../pages/Home/Home'))
const Login = loadable(() => import('../pages/Login/Login'))
const Register = loadable(() => import('../pages/Login/Register'))
const Admin = loadable(() => import('../pages/Admin/Admin'))
const addStudent = loadable(() => import('../pages/Student/Add'))
const studentList = loadable(() => import('../pages/Student/List'))
const updateStudent = loadable(() => import('../pages/Student/Update'))
const delStudent = loadable(() => import('../pages/Student/Delete'))
const addClass = loadable(() => import('../pages/Class/Add'))
const classList = loadable(() => import('../pages/Class/List'))
const updateClass = loadable(() => import('../pages/Class/Update'))
const delClass = loadable(() => import('../pages/Class/Delete'))

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
                    <Route path='/admin' render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    {/* 学生信息相关 */}
                                    <Route path='/admin/student/list' component={studentList}></Route>
                                    <Route path='/admin/student/add' component={addStudent}></Route>
                                    <Route path='/admin/student/update' component={updateStudent}></Route>
                                    <Route path='/admin/student/del' component={delStudent}></Route>
                                    {/* 课程信息相关 */}
                                    <Route path='/admin/class/list' component={classList}></Route>
                                    <Route path='/admin/class/add' component={addClass}></Route>
                                    <Route path='/admin/class/update' component={updateClass}></Route>
                                    <Route path='/admin/class/del' component={delClass}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router