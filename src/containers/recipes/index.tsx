import React, { useEffect } from "react";
import { useRecipeCalls } from "../../redux/dispatchers";
import { useRecipes } from "../../redux/selectors";
import { RecipeResponseObject } from "../../redux/models";
import ImgPreview from "../../components/imgPreview";


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
            {recipes &&
                recipes.map(({ fields, sys } : RecipeResponseObject) => (
                    <div key={sys?.id}>
                        <ImgPreview id={fields.photo?.sys?.id} />
                        <div>{fields?.title}</div>
                    </div>
                ))
            }
        </div>
    )
};

export default Recipes;
