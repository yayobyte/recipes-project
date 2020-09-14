import { ReducerActionType, Recipe } from "../models";
import {
    GET_ALL_RECIPES_REQ,
    GET_ALL_RECIPES_SUC,
    GET_ALL_RECIPES_FAIL,
} from "../actionTypes";

// Get all recipes redux action creators
const getAllRecipesReq = () : ReducerActionType => ({
    type: GET_ALL_RECIPES_REQ,
});

const getAllRecipesSuc = (recipe: Array<Recipe>) : ReducerActionType => ({
    type: GET_ALL_RECIPES_SUC,
    payload: recipe
});

const getAllRecipesFail = (message: string) : ReducerActionType => ({
    type: GET_ALL_RECIPES_FAIL,
    payload: message,
});


export {
    getAllRecipesReq,
    getAllRecipesSuc,
    getAllRecipesFail,
};
