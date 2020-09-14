import { CLEAR_ERROR_MESSAGE, SET_ERROR_MESSAGE } from "../actionTypes";
import { ReducerActionType } from "../models";

const clearErrorMessage = () : ReducerActionType => ({
    type: CLEAR_ERROR_MESSAGE,
});

const setErrorMessage = (errorMessage: string, id: string) : ReducerActionType => ({
    type: SET_ERROR_MESSAGE,
    payload: errorMessage,
    id: id,
});

export {
    clearErrorMessage,
    setErrorMessage,
};
