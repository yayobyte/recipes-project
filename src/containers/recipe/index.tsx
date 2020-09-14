import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useRecipeCalls } from "../../redux/dispatchers";
import { useSingleRecipe } from "../../redux/selectors";
import { RecipeCard, ImgPreview } from "../../components";
import Container from "./styled";

const Recipe = () => {
    //Hooks
    const { id } = useParams();
    const { getRecipe } = useRecipeCalls();
    const { recipe } = useSingleRecipe();

    //Effects
    useEffect(() => {
        if(id) {
            getRecipe(id);
        }
    }, [id]);

    return (
        <Container>
            <ImgPreview assetId={recipe?.photo?.sys?.id} width={550}/>
            <div className="divider" />
            <RecipeCard />
        </Container>
    );
};

export default Recipe;
