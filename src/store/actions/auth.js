import * as ACTION_TYPES from '../types/auth'

export const registerRequest = (user) => {

  return {
    type: ACTION_TYPES.REGISTER_REQUEST,
    payload: user
  }
}

export const registerResponse = (user) => {

  return {
    type: ACTION_TYPES.REGISTER_SUCCESS,
    payload: user
  }
}

export const loginRequest = (user) => {

  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    payload: user
  }
}

export const loginResponse = (user) => {

  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: user
  }
}