import * as types from "../actions/action_types";

const INITIAL_STATE = {};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_RESPONSE:
      debugger
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
