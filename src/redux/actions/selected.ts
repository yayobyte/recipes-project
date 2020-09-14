import { ReducerActionType, Recipe } from "../models";
import {
    GET_RECIPE_REQ,
    GET_RECIPE_SUC,
    GET_RECIPE_FAIL,
} from "../actionTypes";

// Get all recipes redux action creators
const getRecipeReq = () : ReducerActionType => ({
    type: GET_RECIPE_REQ,
});

const getRecipeSuc = (recipe: Recipe) : ReducerActionType => ({
    type: GET_RECIPE_SUC,
    payload: recipe
});

const getRecipeFail = (message: string) : ReducerActionType => ({
    type: GET_RECIPE_FAIL,
    payload: message,
});

export {
    getRecipeReq,
    getRecipeSuc,
    getRecipeFail,
};
