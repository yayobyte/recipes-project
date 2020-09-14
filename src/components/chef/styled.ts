import styled from "styled-components";
import chefIcon from "../../assets/img/chef.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 12px;

    span.chef-icon {
        min-width: 32px;
        width: 32px;
        height: 32px;
        margin-right: 12px;
        background: url(${chefIcon}) no-repeat;
        color: var(--color-primary-dark);
    }

    span.chef-name {
        line-height: 26px;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: 400;
        color: var(--color-text-light);
    }
`;

export default Container;