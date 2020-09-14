import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import API from "../../config/network";
import { Store } from "../models";
import {
    //Recipes
    getAllRecipesReq,
    getAllRecipesSuc,
    getAllRecipesFail,

    //Single Recipe
    getRecipeReq,
    getRecipeSuc,
    getRecipeFail,

    //Asset
    getAssetReq,
    getAssetSuc,
    getAssetFail,

    //Entry
    getEntryReq,
    getEntrySuc,
    getEntryFail,

    //Error
    setErrorMessage,
} from "../actions";


/** Get All Recipes */
const getAllRecipesCall = () => {
    return async (dispatch: ThunkDispatch<Store, null, Action<string>>) => {
        dispatch(getAllRecipesReq());
        try {
            const response = await API.get('entries?content_type=recipe');
            dispatch(getAllRecipesSuc(response.data?.items));
        } catch (error) {
            dispatch(setErrorMessage(error.response?.data?.message || error.message, error.response?.status))
            dispatch(getAllRecipesFail(error.response?.data?.message || error.message));
        }
    }
};

/** Get Single Recipe */
const getRecipeCall = (id: string) => {
    return async (dispatch: ThunkDispatch<Store, null, Action<string>>) => {
        dispatch(getRecipeReq());
        try {
            const response = await API.get(`entries/${id}`);
            dispatch(getRecipeSuc(response.data?.fields));
        } catch (error) {
            dispatch(setErrorMessage(error.response?.data?.message || error.message, error.response?.status))
            dispatch(getRecipeFail(error.response?.data?.message || error.message));
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
            dispatch(setErrorMessage(error.response?.data?.message || error.message, error.response?.status))
            dispatch(getAssetFail(error.response?.data?.message || error.message));
        }
    }
}

/** Get Entry */
const getEntryCall = (id: string) => {
    return async (dispatch : ThunkDispatch<Store, null, Action<string>>) => {
        dispatch(getEntryReq());
        try {
            const response =  await API.get(`entries/${id}`);
            dispatch(getEntrySuc(response.data, id));
        } catch (error) {
            dispatch(setErrorMessage(error.response?.data?.message || error.message, error.response?.status))
            dispatch(getEntryFail(error.response?.data?.message || error.message));
        }
    }
}

export {
    getAllRecipesCall,
    getRecipeCall,
    getAssetCall,
    getEntryCall,
}