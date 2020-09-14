import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div.divider {
        height: 50px;   
        width: 100%;
        margin-top: -5px;
        box-shadow: 0px -43px 43px 0px rgba(0,0,0,0.2);
        border-top: 1px solid rgba(0,0,0,0.3);
    }

    div > img {
        width: 700px;
    }

    span.title {
        font-size: 26px;
    }
`;

export default Container;