import { FETCH_STREAMS } from "../actions/types";

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newState = { ...state };
      action.payload.forEach((stream) => (newState[stream.id] = stream));
      return newState;
    default:
      return state;
  }
};

export default streamsReducer;
