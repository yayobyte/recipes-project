import {
    CLEAR_ERROR_MESSAGE,
    SET_ERROR_MESSAGE,
} from "../actionTypes";
import { ReducerActionType, ErrorReducerType } from "../models";

const initialState : ErrorReducerType = {
    hasError: false,
    errorMessage: undefined,
    id: undefined,
};

const errorReducer = (state = initialState, action: ReducerActionType) => {
    switch (action.type) {
        case CLEAR_ERROR_MESSAGE:
            return ({
                ...state,
                hasError: false,
                errorMessage: undefined,
                id: undefined,
            });
        case SET_ERROR_MESSAGE:
            return ({
                ...state,
                hasError: true,
                errorMessage: action.payload,
                id: action.id,
            });
    }
    return state;
};

export default errorReducer;
