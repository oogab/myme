import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'

import reducer from '../reducers'
import rootSaga from '../sagas'

const loggerMiddleware = ({ dispath, getState }) => (next) => (action) => {
  console.log(action)
  return next(action)
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, loggerMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(sagaMiddleware))
  : composeWithDevTools(applyMiddleware(...middlewares))
const store = createStore(reducer, enhancer)
store.sagaTask = sagaMiddleware.run(rootSaga)

export default store