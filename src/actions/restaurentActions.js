import { RESTAURENT_LIST_FAIL, RESTAURENT_LIST_SUCCESS, RESTAURENT_LIST_REQUAST } from "../constyands/resaurentCounstands";
import axios from "axios";

export const listRestaurent = () => async (dispatch) => {
    
    try {
        const {data} = await axios.get("/restaurants.json")
        dispatch({
            type: RESTAURENT_LIST_SUCCESS,
            payload:data.restaurants
        })

    }
    catch(error) {
        dispatch({
            type:RESTAURENT_LIST_FAIL,
            payload:error
        })

    }
}
