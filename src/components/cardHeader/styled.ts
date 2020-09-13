import styled from "styled-components";
import recipeIcon from "../../assets/img/recipe.svg";

const Container = styled.div`
    height: 40px;
    font-size: 14px;
    font-weight: 300;
    padding: 15px;

    div.row {
        display: flex;
        flex-flow: row nowrap;
    }

    span.icon {
        min-width: 32px;
        width: 32px;
        height: 32px;
        margin-right: 12px;
        background: url(${recipeIcon}) no-repeat;
        color: var(--color-primary-dark)
    }
`;

export default Container;
