import * as ACTION_TYPES from '../types/auth'
import history from "../../utils/history";

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