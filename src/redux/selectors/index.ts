import { useSelector } from "react-redux";
import { Store } from "../models";

export const useRecipes = () => {
    const { recipes } = useSelector((store: Store) => ({
        recipes: store.root.recipes.recipes,
    }));
    return { recipes };
};

export const useAssets = () => {
    const { images } = useSelector((store: Store) => ({
        images: store.root.assets.assets,
    }));
    return { images };
}

export const useError = () => {
    const { hasError, errorMessage, id } = useSelector((store: Store) => ({
        hasError: store.root.error.hasError,
        errorMessage: store.root.error.errorMessage,
        id: store.root.error.id,
    }));
    return { hasError, errorMessage, id };
};

export const useLoader = () => {
    const { assetsLoader, recipesLoader } = useSelector((store: Store) => ({
        assetsLoader: store.root.assets.loading,
        recipesLoader: store.root.recipes.loading,
    }));
    return { loading: assetsLoader || recipesLoader };
}