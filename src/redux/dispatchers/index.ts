import { useDispatch } from "react-redux";
import { getAllRecipesCall, getAssetCall } from "../network";
import { clearErrorMessage, setErrorMessage } from "../actions/error";

export const useRecipeCalls = () => {
    const dispatch = useDispatch();
    return {
        getAllRecipes: () => dispatch(getAllRecipesCall()),
    }
};

export const useAssetCalls = () => {
    const dispatch = useDispatch();
    return {
        getAssets: (id: string) => dispatch(getAssetCall(id)),
    }
};

export const useErrorFunctions = () => {
    const dispatch = useDispatch();
    return {
        clearErrorMessage: () => dispatch(clearErrorMessage()),
        setErrorMessage: (message: string, id: string) => dispatch(setErrorMessage(message, id)),
    }
};
