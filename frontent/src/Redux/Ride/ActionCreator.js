import {
  FIND_RIDE_BY_ID,
  FIND_RIDE_BY_ID_SUCCESS,
  FIND_RIDE_BY_ID_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './ActionType';

export const searchRequest = () => ({
    type: SEARCH_REQUEST,
  });
  
  export const searchSuccess = (results) => ({
    type: SEARCH_SUCCESS,
    payload: results,
  });
  
  export const searchFailure = (error) => ({
    type: SEARCH_FAILURE,
    payload: error,
  });


  // actions.js


  
  export const findRideByIdRequest = (id) => {
    return {
      type: FIND_RIDE_BY_ID,
      payload: id
    };
  };
  
  export const findRideByIdSuccess = (ride) => {
    return {
      type: FIND_RIDE_BY_ID_SUCCESS,
      payload: ride
    };
  };
  
  export const findRideByIdFailure = (error) => {
    return {
      type: FIND_RIDE_BY_ID_FAILURE,
      payload: error
    };
  };
  