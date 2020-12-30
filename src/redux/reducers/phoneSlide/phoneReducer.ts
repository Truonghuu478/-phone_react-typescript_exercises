

import *as types from "../../constants";
import {actions,iniState} from "../../../component/services/typePhone/phone.d";


const initialState = {
    status:false,
    isLoading:false,
    lstPhones:[],
    errors:"",
    stringPhoneOb:["Mã SP","Tên SP","Hình ảnh","Số lượng","Giá bán"]
  

}
function phoneReducer(state=initialState,{type,payload}:actions):iniState {
    switch (type) {
        case types.GET_PHONE_REQUEST:{

            return {...state,isLoading:true}
        }
            
        case types.GET_PHONE_FULFill:{
            
            return {...state,isLoading:false,lstPhones:payload}
        }
        case types.GET_PHONE_FULFill:{
            return {...state,isLoading:false,errors:payload}
        }
        default:
            return {...state}
    }
}
export default phoneReducer;