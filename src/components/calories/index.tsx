import React from "react";
import Container from "./styled";

type Props = {
    amount: string;
}

const Calories = ({ amount }: Props) => (
    <Container>
        <span className="calories-icon" />
        <span>{amount}</span>
    </Container>
);

export default Calories;
