import { all, call } from "redux-saga/effects";
import userSagas from "./user/user-saga";
import { cartSagas } from "../redux/cart/cart-saga";
import { shopSagas } from "../redux/Shop/Shop-sagas";
export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(cartSagas),
    call(userSagas),
  ]);
}
