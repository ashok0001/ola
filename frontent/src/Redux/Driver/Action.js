import { api } from "@/config/api";
import { allocatedRideFailure, allocatedRideRequest, allocatedRideSuccess, getCurrentRideFailure, getCurrentRideRequest, getCurrentRideSuccess } from "./ActionCreator";



export const getDriversCurrentRide = (id) => async (dispatch) => {

    dispatch(getCurrentRideRequest());

    try {
        const response = await api.get(`/drivers/${id}/current_ride`)
        const ride = response.data;
        console.log("current ride - ",ride)
        dispatch(getCurrentRideSuccess(ride)); 
    } catch (error) {
        dispatch(getCurrentRideFailure(error));
    }
        
};


export const getAllocatedRides = (id) => async (dispatch) => {

    dispatch(allocatedRideRequest());

    try {
        const response = await api.get(`/drivers/${id}/allocated`)
        const ride = response.data;
        console.log("allocated ride - ",ride)
        dispatch(allocatedRideSuccess(ride)); 
    } catch (error) {
        dispatch(allocatedRideFailure(error));
    }
        
};
