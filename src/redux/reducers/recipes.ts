import {
    GET_ALL_RECIPES_REQ,
    GET_ALL_RECIPES_SUC,
    GET_ALL_RECIPES_FAIL,
} from "../actionTypes";
import { ReducerActionType, RecipesReducerType } from "../models";
const initialState : RecipesReducerType = {
    loading: false,
    message: null,
    recipes: [],
};

const recipesReducer = (state = initialState, action: ReducerActionType) => {
    switch (action.type) {
        case GET_ALL_RECIPES_REQ:
            return ({
                ...state,
                loading: true,
            });
        case GET_ALL_RECIPES_SUC:
            return ({
                ...state,
                loading: false,
                recipes: action.payload,
            });
        case GET_ALL_RECIPES_FAIL:
            return ({
                ...state,
                loading: false,
                message: action.payload,
            })
    }
    return state;
};

export default recipesReducer;