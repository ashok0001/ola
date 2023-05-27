// actions.js

import axios from 'axios';
import {
  REQUEST_RIDE,
  REQUEST_RIDE_SUCCESS,
  REQUEST_RIDE_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from './ActionType';
import { api } from '@/config/api';

export const requestRide = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_RIDE });

    try {
      const {data} = await api.post(`/rides/request`,reqData);

      console.log("data --- ", data)

      dispatch({
        type: REQUEST_RIDE_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: REQUEST_RIDE_FAILURE,
        payload: error.message
      });
    }
  };
};



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

export const searchLocation = (query) => {
  return async (dispatch) => {
    dispatch(searchRequest());

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    try {
      const response = await axios.get(url);
      console.log("search result -- ",response.data)
      dispatch(searchSuccess(response.data));
    } catch (error) {
      dispatch(searchFailure(error.message));
    }
  };
};
