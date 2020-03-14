import Cookies from 'js-cookie'

function AppReducer(state, action) {
    switch (action.type) {
      
  
      case "setUser": {
        // return {...state, user: {...state.user, data: action.payload} }
        if(action.payload){
            Cookies.set("user", action.payload)
            return {...state, user: action.payload}
        }else{
            Cookies.remove("user")
        }
        
      }
      
      case "signout": {
        Cookies.remove("user")
        return {...state, user: null}
      }
      
      default: {
        return state;
      }
    }
  }
  
  export default AppReducer;