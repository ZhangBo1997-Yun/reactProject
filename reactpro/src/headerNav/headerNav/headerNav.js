// 注意：React不要用括号括起来
import React ,{Component, Fragment} from 'react'
import { Avatar,Icon, Modal, Button} from 'antd';
import {getItem,clear} from '../../utils/webStorage'
import {withRouter} from 'react-router-dom'
import {UserLogout} from '../../api/User'

import "./headerNav.css"

const { confirm } = Modal;

class HeaderNav extends Component{
    // 弹出是否退出的提示框
    showConfirm=()=>{
        console.log(this)
        let that = this
        confirm({
          title: '你确定要退出登录吗?',
        //   content: 'Some descriptions',
          okText: '确定',
          cancelText: '取消',
          onOk(){
            // console.log('确定');
            let uid = getItem("uid") 
            UserLogout(uid)
            .then((res)=>{
                console.log(res)
                clear()
                console.log(that)
                that.props.history.replace('/login')
            })
            .catch((err)=>{
                console.log(err)
            })
          },
          onCancel() {
            console.log('取消');
          },
        });
      }
    render(){
        return(
            <div className="headerNav">
                <Avatar size="small" icon="user" style={{ backgroundColor: '#87d068'}}/>
                <span className="userName">系统管理员</span>
                <Icon type="poweroff" style={{fontSize:16}} onClick={this.showConfirm}/>
                {/* <Button onClick={this.showConfirm}>退出登录</Button> */}
            </div>
        )
    }
}
export default withRouter(HeaderNav)
