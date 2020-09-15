import React from "react";
import Container from "./styled";
import Button from "../button";


type Props = {
    click: () => void,
    title: string,
    id: string,
}

const CardFooter = ({ click, title, id }: Props) => (
    <Container>
        <Button title={title} click={click} id={id}/>
    </Container>
);

export default CardFooter;
