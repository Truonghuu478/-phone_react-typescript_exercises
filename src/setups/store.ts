

import {compose,applyMiddleware,createStore} from "redux";

import  rootReducer from "../redux/reducers/rootReducer";
import  createSagaMiddle from "redux-saga";
import rootSaga from "../redux/saga/rootSaga";
const sagaMiddleware = createSagaMiddle();
const store = createStore(rootReducer,
    compose(applyMiddleware(sagaMiddleware),
(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));


sagaMiddleware.run(rootSaga);

export default store;