
import {combineReducers} from "redux";
import phoneReducer from "./phoneSlide/phoneReducer";

const rootReducer  = combineReducers({
    phoneSlide :phoneReducer
})

export default rootReducer;