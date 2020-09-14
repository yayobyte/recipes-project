import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useErrorFunctions } from "../../redux/dispatchers";
import messages from "../../i18n";
import { ERROR } from "../../config/routes"

const Recipe = () => {
    //Hooks
    const { id } = useParams();
    const { setErrorMessage } = useErrorFunctions();
    const history = useHistory();

    useEffect(() => {
        if(!id) {
            setErrorMessage(`${messages.error.notFound}. id: ${id}`, "404");
            history.push(ERROR);
        } 
    }, [id]);

    return (
        <div>
            Recipe
        </div>
    );
};

export default Recipe;
