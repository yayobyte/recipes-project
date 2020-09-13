import { ReducerActionType, Recipe, KeyValuePair } from "../models";
import {
    GET_ALL_RECIPES_REQ,
    GET_ALL_RECIPES_SUC,
    GET_ALL_RECIPES_FAIL,

    GET_ASSET_REQ,
    GET_ASSET_SUC,
    GET_ASSET_FAIL,
} from "../actionTypes";

// Get all recipes redux action creators
const getAllRecipesReq = () : ReducerActionType => ({
    type: GET_ALL_RECIPES_REQ,
});

const getAllRecipesSuc = (recipe: Array<Recipe>) => ({
    type: GET_ALL_RECIPES_SUC,
    payload: recipe
});

const getAllRecipesFail = (message: string) => ({
    type: GET_ALL_RECIPES_FAIL,
    payload: message,
});


// Get Asset Action creators
const getAssetReq = () : ReducerActionType => ({
    type: GET_ASSET_REQ,
});

const getAssetSuc = (asset: KeyValuePair, id: string) => ({
    type: GET_ASSET_SUC,
    payload: asset,
    id,
});

const getAssetFail = (message: string) => ({
    type: GET_ASSET_FAIL,
    payload: message,
});

export {
    //Recipes
    getAllRecipesReq,
    getAllRecipesSuc,
    getAllRecipesFail,

    //Asset
    getAssetReq,
    getAssetSuc,
    getAssetFail,
}
