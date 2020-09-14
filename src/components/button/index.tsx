import React from "react";
import Container from "./styled";

type Props = {
    title: string,
    click: () => void,
}

const Button = ({ title, click }: Props) => (
    <Container onClick={click}>{title}</Container>
);

export default Button;