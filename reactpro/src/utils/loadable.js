import React from 'react'
import Loadable from 'react-loadable'

export default (loader)=>{
  // console.log(path)
  function Loading(){
    return(
      <h1>
        这里是过度组件
      </h1>
    )
  }
  const LoadableComponent = Loadable({
    loader: loader, //懒加载的组件
    loading: Loading,
  });

  return (props)=>{
    return(
      <LoadableComponent>
        {props.children}
      </LoadableComponent>
    )
  }
  
}