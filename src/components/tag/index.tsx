import React from "react";
import Container from "./styled";

type Props = {
    title: string;
}

const Tag = ({ title }: Props) => (
    <Container>{title}</Container>
);

export default Tag;
