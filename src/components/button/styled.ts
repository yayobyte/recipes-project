import styled from "styled-components";

const Container = styled.div`
    color: var(--color-primary-dark);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 13px;
    height: 16px;
    padding: 8px;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    
    &:hover {
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        color: #FFFFFF;
        background-color: var(--color-primary-dark);
        cursor: pointer;
    }

    &:active {
        background-color: var(--color-primary-light);
        color: var(--color-primary-dark);
    }
`;

export default Container;