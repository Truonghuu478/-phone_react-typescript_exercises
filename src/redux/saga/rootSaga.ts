import {all} from "redux-saga/effects";
import phoneSaga from "./phoneSaga/phoneSaga";
function* rootSaga () {
    yield all([phoneSaga()]);
} 
 export default rootSaga;