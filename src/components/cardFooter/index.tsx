import React from "react";
import Container from "./styled";
import Button from "../button";
import messages from "../../i18n";

type Props = {
    id: string,
}

const CardFooter = ({ id }: Props) => (
    <Container>
        <Button title={messages.recipesList.moreDetails} click={() => console.log({id})}/>
    </Container>
);

export default CardFooter;
