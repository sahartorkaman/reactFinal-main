import { fetchLocations } from "../api/locations";
import { loginUser } from "../api/users";

export const getLocations = () => {
    return async (dispatch) => {
        const locations = await fetchLocations();
        await dispatch({ type: "INIT", payload: locations });
    };
};

export const userAction = (user) => {
    return async (dispatch) => {
        const userInfo = await loginUser(user);
        await dispatch({ type: "USER", payload: userInfo });
    };
};
