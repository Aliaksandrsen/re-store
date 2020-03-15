import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

import mySaga from './sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем мидлвар saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;
