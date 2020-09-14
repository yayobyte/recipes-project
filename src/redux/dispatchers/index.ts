import { useDispatch } from "react-redux";
import { getAllRecipesCall, getAssetCall, getRecipeCall, getEntryCall } from "../network";
import { clearErrorMessage, setErrorMessage } from "../actions/error";

export const useRecipeCalls = () => {
    const dispatch = useDispatch();
    return {
        getAllRecipes: () => dispatch(getAllRecipesCall()),
        getRecipe: (id: string) => dispatch(getRecipeCall(id)),
    }
};

export const useAssetCalls = () => {
    const dispatch = useDispatch();
    return {
        getAssets: (id: string) => dispatch(getAssetCall(id)),
    }
};

export const useEntryCalls = () => {
    const dispatch = useDispatch();
    return {
        getEntry: (id: string) => dispatch(getEntryCall(id)),
    }
};

export const useErrorFunctions = () => {
    const dispatch = useDispatch();
    return {
        clearErrorMessage: () => dispatch(clearErrorMessage()),
        setErrorMessage: (message: string, id: string) => dispatch(setErrorMessage(message, id)),
    }
};
