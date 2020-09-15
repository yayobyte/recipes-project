import React from "react";
import Container from "./styled";

type Props = {
    title: string,
    click: () => void,
    id: string,
}

const Button = ({ title, click, id }: Props) => (
    <Container onClick={click} data-testid={`more-details-button-${id}`}>{title}</Container>
);

export default Button;