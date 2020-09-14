import React from "react";
import ImgPreview from "../imgPreview";
import Container from "./styled";
import CardHeader from "../cardHeader";
import CardFooter from "../cardFooter";

type Props = {
    assetId: string,
    title: string,
    id: string,
};

const RecipePreview = ({ id, title, assetId }: Props) => {
    return (
        <Container>
            <CardHeader title={title} />
            <ImgPreview assetId={assetId} />
            <CardFooter id={id}/>
        </Container>
    );
};

export default RecipePreview;
