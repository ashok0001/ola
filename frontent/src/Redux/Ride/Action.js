// actions.js

import axios from "axios";
import {
  REQUEST_RIDE,
  REQUEST_RIDE_SUCCESS,
  REQUEST_RIDE_FAILURE,

} from "./ActionType";
import { api } from "@/config/api";
import {
  findRideByIdRequest,
  findRideByIdSuccess,
  searchFailure,
  searchRequest,
  searchSuccess,
} from "./ActionCreator";

export const requestRide = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_RIDE });

    try {
      const { data } = await api.post(`/rides/request`, reqData.location);

      console.log("data --- ", data);

      dispatch({
        type: REQUEST_RIDE_SUCCESS,
        payload: data,
      });
      if (data.id) {
        reqData.router.push(`/ride-detail/${data.id}`);
      }
    } catch (error) {
      dispatch({
        type: REQUEST_RIDE_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const findRideById = (id) => {
  return async (dispatch) => {
    dispatch(findRideByIdRequest(null));
    try {
      const { data } = await api.get(`/rides/${+id}`);
      dispatch(findRideByIdSuccess(data));

      console.log("ride details - ",data)
    } catch (error) {
      dispatch(findRideByIdFailure(error.message));
    }
  };
};

export const searchLocation = (query) => {
  return async (dispatch) => {
    dispatch(searchRequest());

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    try {
      const response = await axios.get(url);
      console.log("search result -- ", response.data);
      dispatch(searchSuccess(response.data));
    } catch (error) {
      dispatch(searchFailure(error.message));
    }
  };
};
