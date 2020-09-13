/** Basic type of a key:value pair */
export type KeyValuePair = {[Key: string] : any};

/** Recipes reducer structure */
export interface RecipesReducerType {
    loading: boolean,
    message: string | null,
    recipes?: any,
};

/** Assets Redux Structure */
export interface AssetsReducerType {
    loading: boolean,
    message: string | null,
    assets?: KeyValuePair,
}

/** Root reducer object */
export interface Store {
    root: {
        recipes: RecipesReducerType,
        assets: AssetsReducerType,
    }
    
};

/** Action to be returned by an action creator */
export interface ReducerActionType {
    type: string,
    payload?: any,
    id?: string,
};

/** Basic redipe structure */
export interface Recipe {
    title: string,
    photo?: {[Key: string] : any},
    calories?: number,
    description?: string,
    chef?: string,
    tags?: Array<string>,
};

/** Backend response containing Recipes and sys object for control  */
export interface RecipeResponseObject {
    fields: Recipe,
    sys: {
        id: string,
        type: string,
        createdAt: string,
        updatedAt: string,
        environment: KeyValuePair;
        revision: number,
        contentType: KeyValuePair,
        locale: string,
    }
}