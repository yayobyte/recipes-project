import { ReducerActionType, KeyValuePair } from "../models";
import {
    GET_ASSET_REQ,
    GET_ASSET_SUC,
    GET_ASSET_FAIL,
} from "../actionTypes";

// Get Asset Action creators
const getAssetReq = () : ReducerActionType => ({
    type: GET_ASSET_REQ,
});

const getAssetSuc = (asset: KeyValuePair, id: string) : ReducerActionType => ({
    type: GET_ASSET_SUC,
    payload: asset,
    id,
});

const getAssetFail = (message: string) : ReducerActionType => ({
    type: GET_ASSET_FAIL,
    payload: message,
});

export {
    getAssetReq,
    getAssetSuc,
    getAssetFail,
};
