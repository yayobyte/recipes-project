import React from "react";
import Container from "./styled";

type Props = {
    name: string;
}

const Chef = ({ name }: Props) => (
    <Container>
        <span className="chef-icon" />
        <span className="chef-name">{name}</span>
    </Container>
);

export default Chef;
