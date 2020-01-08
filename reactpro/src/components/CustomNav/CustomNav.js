import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'


const { SubMenu } = Menu;
let arr = [
  {
    name: '首页',
    icon: 'mail',
    path: '/admin/home',
    id: '0'
  }, {
    name: '学生管理',
    icon: 'user',
    id: '2',
    children: [
      {
        name: '查看学生信息',
        id: '2-0',
        path: '/admin/student/list',

      }, {
        name: '添加学生信息',
        path: '/admin/student/add',
        id: '2-1'
      }, {
        name: '修改学生信息',
        path: '/admin/student/update',
        id: '2-2'
      }, {
        name: '删除学生信息',
        path: '/admin/student/del',
        id: '2-3'
      }
    ]
  }, {
    name: '课程管理',
    icon: 'setting',
    id: '3',
    children: [
      {
        name: '查看课程信息',
        id: '3-0',
        path: '/admin/class/list',
      }, {
        name: '添加课程信息',
        path: '/admin/class/add',
        id: '3-1'
      }, {
        name: '修改课程信息',
        path: '/admin/class/update',
        id: '3-2'
      }, {
        name: '删除课程信息',
        path: '/admin/class/del',
        id: '3-3'
      }
    ]
  }, {
    name: '成绩管理',
    icon: 'setting',
    id: '4',
    children: [
      {
        name: '查看成绩信息',
        path: '/admin/grade/list',
        id: '3-0'
      }
    ]
  }, {
    name: '系统管理',
    icon: 'user',
    id: '1',
    children: [
      {
        name: '管理员信息',
        icon: 'user',
        id: '1-0',
        path: '/admin/user/list'
      }, {
        name: '修改密码',
        icon: 'setting',
        path: '/admin/user/setting',
        id: '1-1'
      }
    ]
  }
]

class CustomNav extends Component {
  renderMenuItem(item) {
    if (item.children) {
      return (
        <SubMenu title={<span>
          <Icon type={item.icon || 'setting'} />
          <span>{item.name}</span>
        </span>} key={item.id}>
          {item.children.map((children, childIndex) => {
            return (
              <Menu.Item key={children.id}>
                <Link to={children.path}>
                  <span>
                    <Icon type={children.icon || 'setting'} />
                    <span>{children.name}</span>
                  </span>
                </Link>
              </Menu.Item>
            )
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.id}>
          <Link to={item.path}>
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          </Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Menu mode="inline" theme='dark' defaultOpenKeys={['sub1']}>
        {arr.map((item, index) => {
          return this.renderMenuItem(item)
        })}
      </Menu>
    )
  }
}
export default CustomNav
