import React from "react";
import Container from "./styled";
import Button from "../button";


type Props = {
    click: () => void,
    title: string,
}

const CardFooter = ({ click, title }: Props) => (
    <Container>
        <Button title={title} click={click}/>
    </Container>
);

export default CardFooter;
