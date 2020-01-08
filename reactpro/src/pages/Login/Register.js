import React, { Component } from 'react';
import { Form, Icon, Button, Input, Card, message } from 'antd'
import { UserRegister } from '../../api/user'
import { withRouter } from 'react-router-dom'
import { setItem, getItem } from '../../utils/webStorage'
import styles from './register.module.less'

class Register extends Component {
  componentDidMount() {
    if (getItem('token')) {
      this.props.history.replace('/admin')
    }
  }
  jump = () => {
    this.props.history.replace('/login')
  }
  Register = () => { //这是个函数
    let { validateFields } = this.props.form
    validateFields((err, data) => {
      if (err) {
        message.error('用户输入有误请重试')
      } else {
        //  发起网络请求登录
        let { userName, passWord } = data
        UserRegister(userName, passWord)
          .then((res) => {
            console.log('then', res)
            // 将token 和 ids 存到缓存里
            setItem('token', res.token)
            setItem('uid', res._id)
            setItem("exp")
            message.success('登录成功3s后跳转首页', 1, () => {
              this.props.history.replace('/admin')
            })
          })
          .catch((err) => {
            message.error(err.msg)
          })

      }
    })
  }
  render() {
    //  console.log('login',this)
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className={styles.login}>
        <div className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '用户名不能为空!' },
              { min: 3, message: '最小长度为3个字符!' },
              { max: 9, message: '最大长度为9个字符!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )}

          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passWord', {})(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />
            )}

          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.Register} className="register-form-button">
              注册
          </Button>
            <a className={styles.right} onClick={this.jump}>立即登录!</a>
          </Form.Item>
        </div>
      </Card>
    );
  }
}
// Form.create 是一个函数返回一个高阶组件  
// connect  是一个函数返回一个高阶组件
export default Form.create({})(withRouter(Register));
