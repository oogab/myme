import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import user from './user'

// 같은 타입의 액션인데 데이터마다 계속 새로 만들 수는 없어...
// const changeNickname = {
//   type: 'CHANGE_NICKNAME',
//   data: 'sook',
// }
// async action creator
// action creator
// const changeNickname = (data) => {
//   return {
//     type: 'CHANGE_NICKNAME',
//     data,
//   }
// }

// combineReducers가 알아서 만들어 준다!
// const initialState = {
//     user: {
//
//     },
//     challenge: {
//  
//     } 
// }

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      // console.log('HYDRATE', action)
      return action.payload
    default: {
      const combineReducer = combineReducers({
        user
      })
      return combineReducer(state, action)
    }
  }
}

export default rootReducer