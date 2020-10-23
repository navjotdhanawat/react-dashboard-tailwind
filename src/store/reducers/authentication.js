import * as types from "../actions/action_types";

const INITIAL_STATE = {
  isAuthenticated: false
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
};
