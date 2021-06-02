import userActiontypes from "./user.types";
const INITIAL_STATE = {
  currentuser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActiontypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentuser: action.payload,
        error: null,
      };
    case userActiontypes.SIGN_OUT_SUCCESS:
      case userActiontypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentuser: null,
        error: null,
      };
    case userActiontypes.SIGN_OUT_FAILURE:
    case userActiontypes.SIGN_IN_FAILURE:
    case userActiontypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
