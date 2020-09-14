import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    margin: 100px auto;
    padding: 30px;
    width: 500px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;

    div.actions {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 20px;
    }

    h3 {
        color: var(--color-error-dark);
        font-weight: 500;
    }

    h1 {
        color: var(--color-text-light);
        font-family: 'Roboto';
        font-weight: 400;
    }

    hr {
        margin: 20px 0;
    }

    div.paragraph {
        .code {
            background-color: #EAEAEA;
            margin: 10px 0;
            padding: 5px;
            font-family: 'Roboto'
        }

        quote {
            color: var(--color-secondary-dark);
            font-size: 12px;
        }
    }
`;

export default Container;
