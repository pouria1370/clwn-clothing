import userActiontypes  from "./user.types";
// export const setCurrentUser = (user) => ({
//   type: userActiontypes.SET_CURRENT_USER,
//   payload: user,
// });

export const googleSignInStart = () => ({
  type: userActiontypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPass) => ({
  type: userActiontypes.EMAIL_SIGN_IN_START,
  payload:emailAndPass
});
export const SignInSuccess = (emailAndPass) => ({
  type: userActiontypes.SIGN_IN_SUCCESS,
  payload: emailAndPass,
});
export const SignInFailure = (error) => ({
  type: userActiontypes.SIGN_IN_FAILURE,
  payload: error,
});
export const checkUserSession=()=>({
  type:userActiontypes.CHECK_USER_SESSION
})
export const signOutStart=()=>({
  type:userActiontypes.SIGN_OUT_START
})
export const signOutSuccess=()=>({
  type:userActiontypes.SIGN_OUT_SUCCESS
})
export const signOutFailure=(error)=>({
  type:userActiontypes.SIGN_OUT_FAILURE,
  payload:error
})
export const signUpStart=(emailAndPass)=>({
  type:userActiontypes.SIGN_UP_START,
  payload:emailAndPass
})
export const signUpSuccess=({user,aditionalData})=>({
  type:userActiontypes.SIGN_UP_SUCCESS,
  payload:{user,aditionalData}
})
export const signUpFailure=(error)=>({
  type:userActiontypes.SIGN_UP_FAILURE,
  payload:error
})