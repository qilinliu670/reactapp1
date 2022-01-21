import { createStore, applyMiddleware } from 'redux'
import createSaga from 'redux-saga'
import foodReducer from './reducers'
import RootSaga from './sagas'

var sagaMiddleware = createSaga()

var store = createStore(foodReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

export default store