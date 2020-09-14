import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Container from "./styled";
import { useError } from "../../redux/selectors";
import { useErrorFunctions } from "../../redux/dispatchers";
import { Button } from "../../components";
import { RECIPES } from "../../config/routes";
import messages from "../../i18n";

const Error = () => {
    //Hooks
    const history = useHistory();
    const { errorMessage, id, hasError } = useError();
    const { clearErrorMessage } = useErrorFunctions();

    //Effects
    useEffect(() => {
        if (!hasError) {
            history.push(RECIPES);
        }
    }, [hasError]);

    return (
        <Container>
            <h1>{messages.error.title}</h1>
            <hr />
            <h3>{id}</h3>
            {errorMessage ? <div className="paragraph" dangerouslySetInnerHTML={ { __html: errorMessage } } /> : null}
            <div className="actions">
                <Button title={messages.error.okButton} click={clearErrorMessage}/>
            </div>
        </Container>
    )
};

export default Error;
