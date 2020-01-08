import React from 'react'
import Loadable from 'react-loadable'
import { Spin, Alert } from 'antd'
export default (loader) => {
  // console.log(path)
  
  function Loading() {
    return (
      <Spin tip="Loading...">
        <Alert
          message="加载中"
          description="正在加载，大人稍等"
          type="info"
        />
      </Spin>
    )
  }
  const LoadableComponent = Loadable({
    loader: loader, //懒加载的组件
    loading: Loading,
  });

  return (props) => {
    return (
      <LoadableComponent>
        {props.children}
      </LoadableComponent>
    )
  }

}