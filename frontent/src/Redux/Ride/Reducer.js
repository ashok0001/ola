// reducer.js

import {
  REQUEST_RIDE,
  REQUEST_RIDE_SUCCESS,
  REQUEST_RIDE_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_FAILURE,
} from "./ActionType";

const initialState = {
  loading: false,
  ride: null,
  error: null,
  results: [],
};

const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RIDE:
      return {
        ...state,
        loading: true,
        ride: null,
        error: null,
      };
    case REQUEST_RIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        ride: action.payload,
        error: null,
      };
    case REQUEST_RIDE_FAILURE:
      return {
        ...state,
        loading: false,
        ride: null,
        error: action.payload,
      };

    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rideReducer;
