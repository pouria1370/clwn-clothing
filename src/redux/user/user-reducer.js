import {userActiontypes}from './user.types'
const INITIAL_STATE={ 
    currentuser: null
}
const userReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
case userActiontypes.SET_CURRENT_USER:
return{
    ...state,
    currentuser:action.payload
}
default:
    return state;
}
}

export default userReducer;