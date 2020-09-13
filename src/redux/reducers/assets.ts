import {
    GET_ASSET_REQ,
    GET_ASSET_SUC,
    GET_ASSET_FAIL,
} from "../actionTypes";
import { ReducerActionType, AssetsReducerType } from "../models";
const initialState : AssetsReducerType = {
    loading: false,
    message: null,
    assets: undefined,
};

const assetsReducer = (state = initialState, action: ReducerActionType) => {
    switch (action.type) {
        case GET_ASSET_REQ:
            return ({
                ...state,
                loading: true,
            });
        case GET_ASSET_SUC:
            return action.id ?
            ({
                ...state,
                loading: false,
                assets: {
                    ...state.assets,
                    [action.id] : action.payload
                },
            }) : ({
                ...state,
                loading: false,
            });
        case GET_ASSET_FAIL:
            return ({
                ...state,
                loading: false,
                message: action.payload,
            })
    }
    return state;
};

export default assetsReducer;