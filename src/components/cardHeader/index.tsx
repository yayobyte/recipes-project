import React from "react";
import Container from "./styled";

type Props = {
    title: string,
}

const CardHeader = ({ title }: Props) => (
    <Container>
        <div className="row">
            <span className="icon" />
            <span className="title">{title}</span>
        </div>
    </Container>
);

export default CardHeader;