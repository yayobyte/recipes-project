import React, { useCallback } from "react";
import { useHistory } from "react-router";
import ImgPreview from "../imgPreview";
import Container from "./styled";
import CardHeader from "../cardHeader";
import CardFooter from "../cardFooter";
import messages from "../../i18n";
import { RECIPES } from "../../config/routes";

type Props = {
    assetId: string,
    title: string,
    id: string,
};

const RecipePreview = ({ id, title, assetId }: Props) => {
    //Hooks
    const history = useHistory();
    
    //Functions
    const onClick = useCallback(() => {
        history.push(`${RECIPES}/${id}`);
    }, [history, id]);

    return (
        <Container>
            <CardHeader title={title} />
            <ImgPreview assetId={assetId} />
            <CardFooter title={messages.recipesList.moreDetails} click={onClick}/>
        </Container>
    );
};

export default RecipePreview;
