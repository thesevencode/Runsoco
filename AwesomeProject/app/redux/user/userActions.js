import axios from 'axios'
import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,

    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE

} from './userTypes'

import {API} from '../../config/consts'

//registro
export const fetchRegisterUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest())
    axios
      .post(`${API}/auth/signIn`, data)
      .then(response => {
          // response.data is the users
          const user = response.data
        dispatch(fetchRegisterSuccess(user))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchRegisterFailure(error))
      })
  }
}

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST
  }
}

export const fetchRegisterSuccess = user => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: user
  }
}

export const fetchRegisterFailure = error => {
  return {
    type: FETCH_REGISTER_FAILURE,
    payload: error
  }
}


//login
export const fetchLoginUsers = (data) => {
    return (dispatch) => {
      dispatch(fetchLoginRequest())
      axios
        .post(`${API}/auth/login`, data)
        .then(response => {
            // response.data is the users
            const user = response.data
          dispatch(fetchLoginSuccess(user))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchLoginFailure(error))
        })
    }
  }
  
export const fetchLoginRequest = () => {
    return {
      type: FETCH_LOGIN_REQUEST
    }
}
  
export const fetchLoginSuccess = user => {
    return {
      type: FETCH_LOGIN_SUCCESS,
      payload: user
    }
}
  
export const fetchLoginFailure = error => {
    return {
      type: FETCH_LOGIN_FAILURE,
      payload: error
    }
}