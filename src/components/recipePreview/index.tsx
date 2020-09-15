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
        <Container data-testid={`recipe-preview-${id}`}>
            <CardHeader title={title} />
            <ImgPreview assetId={assetId} width={345}/>
            <CardFooter title={messages.recipesList.moreDetails} click={onClick} id={id}/>
        </Container>
    );
};

export default RecipePreview;
