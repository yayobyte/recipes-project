import { useSelector } from "react-redux";
import { Store } from "../models";

/**Hook to get recipes from Redux */
export const useRecipes = () => {
    const { recipes } = useSelector((store: Store) => ({
        recipes: store.root.recipes.recipes,
    }));
    return { recipes };
};

/**Hook to get single recipe from Redux */
export const useSingleRecipe = () => {
    const { recipe } = useSelector((store: Store) => ({
        recipe: store.root.selected.recipe,
    }));
    return { recipe };
};

/**Hook to get assets from Redux */
export const useAssets = () => {
    const { images } = useSelector((store: Store) => ({
        images: store.root.assets.assets,
    }));
    return { images };
};

/**Hook to get entries from Redux */
export const useEntries = () => {
    const { entry } = useSelector((store: Store) => ({
        entry: store.root.entries.entry,
    }));
    return { entry };
};

/**Hook to get errors from Redux */
export const useError = () => {
    const { hasError, errorMessage, id } = useSelector((store: Store) => ({
        hasError: store.root.error.hasError,
        errorMessage: store.root.error.errorMessage,
        id: store.root.error.id,
    }));
    return { hasError, errorMessage, id };
};

/**Hook to get loader states from Redux */
export const useLoader = () => {
    const { assetsLoader, recipesLoader, selectedRecipeLoader, entriesLoader } = useSelector((store: Store) => ({
        assetsLoader: store.root.assets.loading,
        recipesLoader: store.root.recipes.loading,
        selectedRecipeLoader: store.root.selected.loading,
        entriesLoader: store.root.entries.loading,
    }));
    return { loading: assetsLoader || recipesLoader || selectedRecipeLoader || entriesLoader };
};