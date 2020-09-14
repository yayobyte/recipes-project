import {
    GET_ENTRY_REQ,
    GET_ENTRY_SUC,
    GET_ENTRY_FAIL,
} from "../actionTypes";
import { ReducerActionType, EntriesReducerType } from "../models";
const initialState : EntriesReducerType = {
    loading: false,
    message: null,
    entry: undefined,
};

const entriesReducer = (state = initialState, action: ReducerActionType) : EntriesReducerType=> {
    switch (action.type) {
        case GET_ENTRY_REQ:
            return ({
                ...state,
                loading: true,
            });
        case GET_ENTRY_SUC:
            return action.id ?
            ({
                ...state,
                loading: false,
                entry: {
                    ...state.entry,
                    [action.id] : action.payload
                },
            }) : ({
                ...state,
                loading: false,
            });
        case GET_ENTRY_FAIL:
            return ({
                ...state,
                loading: false,
                message: action.payload,
            })
    }
    return state;
};

export default entriesReducer;