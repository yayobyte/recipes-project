import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import API from "../../config/network";
import { Store } from "../models";
import {
    //Recipes
    getAllRecipesReq,
    getAllRecipesSuc,
    getAllRecipesFail,

    //Asset
    getAssetReq,
    getAssetSuc,
    getAssetFail,
} from "../actions";


/** Get All Recipes */
const getAllRecipesCall = () => {
    return async (dispatch: ThunkDispatch<Store, null, Action<string>>) => {
        dispatch(getAllRecipesReq());
        try {
            const response = await API.get('entries?content_type=recipe');
            dispatch(getAllRecipesSuc(response.data?.items));
        } catch (error) {
            dispatch(getAllRecipesFail(error.message));
        }
    }
};

/** Get Asset */
const getAssetCall = (id: string) => {
    return async (dispatch : ThunkDispatch<Store, null, Action<string>>) => {
        dispatch(getAssetReq());
        try {
            const response =  await API.get(`assets/${id}`);
            dispatch(getAssetSuc(response.data, id));
        } catch (error) {
            dispatch(getAssetFail(error.message));
        }
    }
}

export {
    getAllRecipesCall,
    getAssetCall,
}