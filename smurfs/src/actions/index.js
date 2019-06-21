import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADDING = 'ADDING';
export const DELETING = 'DELETING';

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
export const getSmurfs = () => (dispatch) => {
  dispatch ({type: FETCHING})
  axios
  .get ('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({type:SUCCESS, payload:response.data})
  })
  .catch(err => {
    dispatch({type:ERROR, payload:err})
  })
}

export const addSmurf = (index) => (dispatch) => {
  dispatch ({type: ADDING})
  axios
  .post ('http://localhost:3333/smurfs' , index)
  .then (response => {
    dispatch({type: SUCCESS, payload : response.data});
    return true
  })
  .catch ( err => {
    dispatch({type: ERROR, payload : err})
    return false
  })
}
export const deleteSmurf = (index) => (dispatch) => {
  dispatch ({type: DELETING})
  axios
  .delete (`http://localhost:3333/smurfs/${smurf}`)
  .then (response => {
    dispatch({type: SUCCESS, payload : response.data});
    return true
  })
  .catch ( err => {
    dispatch({type: ERROR, payload : err})
    return false
  })
}