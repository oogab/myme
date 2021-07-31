const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  challenge: {
    allChallenges: [],
    recommendChallenges: [],
  }
}

// 같은 타입의 액션인데 데이터마다 계속 새로 만들 수는 없어...
// const changeNickname = {
//   type: 'CHANGE_NICKNAME',
//   data: 'sook',
// }
// async action creator
// action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      }
    default:
      return state
  }
}

export default rootReducer