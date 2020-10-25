import * as types from "../types/auth";

const INITIAL_STATE = {
  isAuthenticated: false,
  error: null
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
