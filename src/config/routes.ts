import { RecipeList, Recipe, Error } from "../containers";

export const RECIPES = "/recipes";
export const RECIPE_ID = "recipes/:id";
export const ERROR = "/error";

export const router = [
    {
        route: RECIPES,
        Component: RecipeList,
    },
    {
        route: RECIPE_ID,
        Component: Recipe,
    },
    {
        route: ERROR,
        Component: Error,
    }
];
