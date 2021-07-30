import streams from "../apis/streams";
import { FETCH_STREAMS, GOOGLE_AUTH_INIT, SIGN_IN, SIGN_OUT } from "./types";

export const googleAuthInit = () => {
  return (dispatch) => {
    // wait 1 second till google's library "gapi" is loaded
    // without waiting this function may be invoked before "gapi" is loaded
    setTimeout(() => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2.init({
          client_id:
            "55228161844-6q8f6rthd4u180gjeclqb2gvlfmvn6ar.apps.googleusercontent.com",
        });
        const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
        const userId = window.gapi.auth2
          .getAuthInstance()
          .currentUser.get()
          .getId();
        dispatch({ type: GOOGLE_AUTH_INIT, payload: { isSignedIn, userId } });
      });
    }, 1000);
  };
};

export const signIn = () => async (dispatch) => {
  await window.gapi.auth2.getAuthInstance().signIn();
  const userId = window.gapi.auth2.getAuthInstance().currentUser.get().getId();
  dispatch({ type: SIGN_IN, payload: { isSignedIn: true, userId } });
};

export const signOut = () => async (dispatch) => {
  await window.gapi.auth2.getAuthInstance().signOut();
  dispatch({ type: SIGN_OUT, payload: { isSignedIn: false, userId: null } });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
