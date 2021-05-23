import {ShopTypes} from './Shop-Types'
const INITIAL_STATE={
    collection:null
}
  
  const shopReducer=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        default:
            return state;
            case ShopTypes.UPDATE_COLLECTION:
              return{
                ...state,
                collection:action.payload
              }
    }
  }
  
  
  export default shopReducer