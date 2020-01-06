import state from  './state'
import * as types from  './action-types'
export default (prevState=state,actions)=>{
   let newData =JSON.parse(JSON.stringify(prevState))  
   console.log('批奏折',actions,newData)
   let {type,params} = actions
   switch (type) {
     case types.SET_TOKEN_MODAL:
        newData.tokenModal=params
       break;
   
     default:
       break;
   }
   console.log('修改后的数据')
   return newData
}