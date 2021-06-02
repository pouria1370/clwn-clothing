import {all,call,put,takeLatest} from 'redux-saga/effects'
import { clearCart } from "./cart-actions";
import userActionTypes from '../user/user.types'

export function*clearCartSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartSignOut)
}

export function* cartSagas(){

    yield all([call(onSignOutSuccess)])
}