import { ReducerActionType, KeyValuePair } from "../models";
import {
    GET_ENTRY_REQ,
    GET_ENTRY_SUC,
    GET_ENTRY_FAIL,
} from "../actionTypes";

// Get Entry Action creators
const getEntryReq = () : ReducerActionType => ({
    type: GET_ENTRY_REQ,
});

const getEntrySuc = (asset: KeyValuePair, id: string) : ReducerActionType => ({
    type: GET_ENTRY_SUC,
    payload: asset,
    id,
});

const getEntryFail = (message: string) : ReducerActionType => ({
    type: GET_ENTRY_FAIL,
    payload: message,
});

export {
    getEntryReq,
    getEntrySuc,
    getEntryFail,
};
