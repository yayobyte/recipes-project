import React, { useEffect } from "react";
import { useRecipeCalls } from "../../redux/dispatchers";
import { useRecipes } from "../../redux/selectors";
import { RecipeResponseObject } from "../../redux/models";


const Recipes = () => {
    // Hooks
    const { getAllRecipes } = useRecipeCalls();
    const { recipes } = useRecipes();

    //Effects
    useEffect(() => {
        getAllRecipes();
    }, []);
    return (
        <div>
            <h1>Hello Parcero</h1>
            {recipes &&
                recipes.map(({ fields } : RecipeResponseObject) => (
                    <div>
                        <div>{fields?.title}</div>
                    </div>
                ))
            }
        </div>
        
    )
};

export default Recipes;
