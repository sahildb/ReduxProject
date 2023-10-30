import {applyMiddleware, createStore} from 'redux'
import productSaga from './productSaga'
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(productSaga)
export default store;