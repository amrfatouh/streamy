import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

const reducers = combineReducers({
  auth: authReducer,
  streams: streamsReducer,
});

export default reducers;
