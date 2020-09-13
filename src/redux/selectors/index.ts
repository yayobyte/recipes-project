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