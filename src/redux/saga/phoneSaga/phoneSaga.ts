import { takeEvery,call ,put} from 'redux-saga/effects';
import *as types from "../../constants";
// import React from "react";
const urlAPI:string = "https://5fe9ef758ede8b0017ff136d.mockapi.io/phone";
const  fetchPhones= ()=> fetch(urlAPI,{method:"GET"}).then(res=>res.json())
    

function* getPhones (){
    try {
        const res =  yield call(fetchPhones) ;
    
        
        yield put({type:types.GET_PHONE_FULFill,payload:res})
    } catch (error) {
        yield put({type:types.GET_PHONE_REJECT,payload:error})
    }
}
function* phoneSaga (){

    yield takeEvery(types.GET_PHONE_REQUEST,  getPhones  );
}

export default phoneSaga;