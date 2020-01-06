import * as actions from './action-types'
export default {
  setTokenModal(params=true){
    return { type:actions.SET_TOKEN_MODAL,params:params}
  }
}