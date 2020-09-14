import {
    GET_RECIPE_REQ,
    GET_RECIPE_SUC,
    GET_RECIPE_FAIL,
} from "../actionTypes";
import { ReducerActionType, SelectedReducerType } from "../models";
const initialState : SelectedReducerType = {
    loading: false,
    message: null,
    recipe: {},
};

const selectedReducer = (state = initialState, action: ReducerActionType) : SelectedReducerType => {
    switch (action.type) {
        case GET_RECIPE_REQ:
            return ({
                ...state,
                loading: true,
            });
        case GET_RECIPE_SUC:
            return ({
                ...state,
                loading: false,
                recipe: action.payload,
            });
        case GET_RECIPE_FAIL:
            return ({
                ...state,
                loading: false,
                message: action.payload,
            })
    }
    return state;
};

export default selectedReducer;