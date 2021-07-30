import { GOOGLE_AUTH_INIT, SIGN_IN, SIGN_OUT } from "../actions/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case GOOGLE_AUTH_INIT:
      return action.payload;
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
