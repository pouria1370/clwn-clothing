import { all, call, put, take, takeLatest } from "redux-saga/effects";
import userActiontypes from "../user/user.types";
import {
  SignInFailure,
  SignInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from "./user-actions";
import {
  createUserProfileDocument,
  provider,
  auth,
  getCurrentUser,
} from "../../components/firbase/firebase.utility";
export function* getSnapShotFromUserAuth(userAuth,additioalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth,additioalData);
    const snapShot = yield userRef.get();
    yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    yield put(SignInFailure(error));
  }
}

export function* googleSignInHandler() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(call(SignInFailure, error.message));
  }
}
export function* googleSignIn() {
  yield takeLatest(userActiontypes.GOOGLE_SIGN_IN_START, googleSignInHandler);
}
export function* emailSignInHandler({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(call(SignInFailure, error.message));
  }
}
export function* emailSignIn() {
  yield takeLatest(userActiontypes.EMAIL_SIGN_IN_START, emailSignInHandler);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}
export function* checkUserSession() {
  yield takeLatest(userActiontypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* signOut() {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signOutStart() {
  yield takeLatest(userActiontypes.SIGN_OUT_START, signOut);
}

export function* signUpStartHandler({ payload: { email, password,displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user,aditionalData:{displayName} }));
  } catch (error) {
    yield put(call(signUpFailure, error.message));
  }
}

export function*onSignUpSuccess(){
  yield takeLatest(userActiontypes.SIGN_UP_SUCCESS,signInAfterSignup)
}
export function * signInAfterSignup({payload:{user,aditionalData}}){
yield getSnapShotFromUserAuth(user,aditionalData)
}
export function* onSignUpStart() {
  yield takeLatest(userActiontypes.SIGN_UP_START, signUpStartHandler);
}
export default function* userSagas() {
  yield all([
    call(signOutStart),
    call(googleSignIn),
    call(emailSignIn),
    call(checkUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
