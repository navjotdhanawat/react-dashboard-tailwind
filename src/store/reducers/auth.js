import * as types from "../types/auth";

const INITIAL_STATE = {
  isAuthenticated: false
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case types.LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false
        };
    default:
      return state;
  }
};
