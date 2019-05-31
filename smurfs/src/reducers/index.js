/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_START, 
  FETCH_SUCCESS, 
  FETCH_ERROR, 
  ADD_SMURF, 
  POST_SUCCESS
} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function reducer(state = initialState, action){
  console.log("reducer", action)
  switch(action.type){
    case FETCH_START:
      return {
        ...state, 
        error: "",
        smurfs: [], 
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS:
      return{
        ...state, 
        error: "",
        smurfs: action.smurfs, 
        fetchingSmurfs: false
      };
    case FETCH_ERROR:
      return{
        ...state, 
        error: "", 
        fetchingSmurfs: false
      }
    case ADD_SMURF:
    return{
      ...state, 
      error: '', 
      addingSmurf: true
    }
    case POST_SUCCESS:
        return{
          ...state, 
          error: '', 
          addingSmurf: false, 
          smurfs: [...state.smurfs, action.smurfs]
        }
    default: 
    return state
  }
}

export default reducer;