import React from 'react';
import styles from './admin.module.less'
import { Layout, Icon } from 'antd';
import CustomNav from '../../components/CustomNav/CustomNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'

const { Header, Sider, Content } = Layout;
class Admin extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
    current: '1',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Layout className={styles.admin}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <CustomNav></CustomNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              style={{ padding: 15}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <HeaderNav></HeaderNav>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
            
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;