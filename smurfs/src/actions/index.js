/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = "START";
export const FETCH_SUCCESS = "SUCCESS";
export const FETCH_ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF"
export const POST_SUCCESS = "POST_SUCCESS";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => {
  return dispatch => {
    dispatch({
      type: FETCH_START
    });
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Res Data", res.data);
      dispatch({
        type: FETCH_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR, 
        payload: err.response
      });
    });
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({
      type: ADD_SMURF
    });
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("Res Data", res.data);
      dispatch({
        type: POST_SUCCESS,
        smurfs: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR, 
        smurfs: err.response
      });
    });
  }
}