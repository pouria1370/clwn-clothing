import { ShopTypes } from "./Shop-Types";
const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
      case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching:false,
        collection: action.payload,
      };
      case ShopTypes.FETCH_COLLECTIONS_FAILIURE:
      return {
        ...state,
        isFetching:false,
        errorMessage:action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
