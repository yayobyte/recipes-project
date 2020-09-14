import styled from "styled-components";
import caloriesIcon from "../../assets/img/calories.svg";

const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 12px;

    span.calories-icon {
        min-width: 32px;
        width: 32px;
        height: 32px;
        margin-right: 12px;
        background: url(${caloriesIcon}) no-repeat;
        color: var(--color-primary-dark);
    }

    span {
        line-height: 32px;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 400;
        color: var(--color-text-light);
    }


`;

export default Container;
