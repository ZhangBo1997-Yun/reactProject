// 注意：React不要用括号括起来
import React, { Component } from 'react'
import { Avatar, Icon, Modal, message } from 'antd'
import { getItem, clear } from '../../utils/webStorage'
import { withRouter } from 'react-router-dom'
import { UserLogOut } from '../../api/user'
import styles from './HeaderNav.module.less'
const { confirm } = Modal;

class HeaderNav extends Component {
  // 弹出是否退出的提示框
  showConfirm = () => {
    let that = this
    confirm({
      title: '你确定要退出登录吗?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        let _id = getItem('uid')
        let token = getItem('token')
        UserLogOut(_id, token)
          .then((res) => {
            clear()
            message.success(res.msg)
            that.props.history.replace('/login')
          })
          .catch((err) => {
            if (err.err === '-998') {
              message.error(err.msg)
              clear()
              that.props.history.replace('/login')
            }
          })
      },
      onCancel() {
        console.log('取消');
      },
    });
  }
  render() {
    return (
      <div className={styles.headerNav}>
        <Avatar size="small" icon="user" style={{ backgroundColor: '#87d068' }} />
        <span className={styles.userName}>系统管理员</span>
        <Icon type="poweroff" style={{ fontSize: 16 }} onClick={this.showConfirm} />
      </div>
    )
  }
}
export default withRouter(HeaderNav)


