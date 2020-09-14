import React, { useEffect } from "react";
import { useRecipeCalls } from "../../redux/dispatchers";
import { useRecipes } from "../../redux/selectors";
import { RecipeResponseObject } from "../../redux/models";
import { RecipePreview } from "../../components";
import Container from "./styled";


const Recipes = () => {
    // Hooks
    const { getAllRecipes } = useRecipeCalls();
    const { recipes } = useRecipes();

    //Effects
    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <Container>
            {recipes &&
                recipes.map(({ fields, sys } : RecipeResponseObject) => (
                    <RecipePreview assetId={fields.photo?.sys?.id} title={fields?.title} key={sys?.id} id={sys?.id}/>
                ))
            }
        </Container>
    )
};

export default Recipes;
