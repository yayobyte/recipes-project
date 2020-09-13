import { useDispatch } from "react-redux";
import { getAllRecipesCall, getAssetCall } from "../network";

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
}