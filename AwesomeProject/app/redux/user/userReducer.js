import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,

    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from './userTypes'
  
const initialState = {
    loading: false,
    user: [],
    error: ''
}
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      // register
      case FETCH_REGISTER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_REGISTER_SUCCESS:
        return {
          loading: false,
          user: action.payload,
          error: ''
        }
      case FETCH_REGISTER_FAILURE:
        return {
          loading: false,
          user: [],
          error: action.payload
        }

      // login
      case FETCH_LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_LOGIN_SUCCESS:
        return {
          loading: false,
          user: action.payload,
          error: ''
        }
      case FETCH_LOGIN_FAILURE:
        return {
          loading: false,
          user: [],
          error: action.payload
        }
      default: return state
    }
}
  
export default reducer