import React,{Component} from 'react';
import {Form,Icon,Button,Input,Card,message} from 'antd'
import {UserLogin} from '../../api/user'
import {withRouter} from 'react-router-dom'
import {setItem,getItem} from '../../utils/webStorage'
import styles from './login.module.less'

class Login extends Component{
  componentDidMount(){
      if(getItem('token')){
        this.props.history.replace('/admin')
      }
  }
  jump=()=>{
    this.props.history.replace('/register')
  }
  login=()=>{ //这是个函数
   let {getFieldsValue,validateFields} = this.props.form 
  //  console.log(getFieldsValue())
    validateFields((err,data)=>{
      if(err){
        message.error('用户输入有误请重试')
      }else{
        //  发起网络请求登录
        console.log()
        let {userName,passWord} = data
        UserLogin(userName,passWord)
        .then((res)=>{
          console.log('then',res)
          // 将token 和 ids 存到缓存里
          setItem('token',res.token)
          setItem('uid',res.uid)
          setItem('rootIds',['0','1','2-0','2-1'])
          message.success('登录成功3s后跳转首页',1,()=>{
            this.props.history.replace('/admin')
          })
        })
        .catch((err)=>{
          message.error(err.msg)
        })

      }
    console.log(err,data)
  })
 }
 render() {
   console.log('login',this)
   const { getFieldDecorator } = this.props.form;
  return (
    <Card className={styles.login}>
     <div  className="login-form">
        <Form.Item>
          {getFieldDecorator('userName',{
            rules: [{ required: true, message: '用户名不能为空!' },
                    { min:3 , message: '最小长度为3个字符!' },
                    { max: 9, message: '最大长度为9个字符!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passWord',{})(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
          )}
         
        </Form.Item>
        <Form.Item>
          
          <Button type="primary" onClick={this.login} className="login-form-button">
            登录
          </Button>
          <a className={styles.right} onClick={this.jump}>没有账号,立即注册!</a>
        </Form.Item>
      </div>
    </Card>
  );
}
}
// Form.create 是一个函数返回一个高阶组件  
// connect  是一个函数返回一个高阶组件
export default Form.create({})(withRouter(Login));
