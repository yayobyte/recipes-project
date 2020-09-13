import React from "react";
import ImgPreview from "../imgPreview";
import Container from "./styled";
import CardHeader from "../cardHeader";
import CardFooter from "../cardFooter";

type Props = {
    id: string,
    title: string,
};

const RecipePreview = ({ id, title }: Props) => {
    return (
        <Container>
            <CardHeader title={title} />
            <ImgPreview id={id} />
            <CardFooter />
        </Container>
    );
};

export default RecipePreview;
