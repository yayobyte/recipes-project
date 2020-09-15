import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router";
import { router, ERROR } from "./config/routes";
import { useError, useLoader } from "./redux/selectors";
import { useErrorFunctions } from "./redux/dispatchers";
import { Loader } from "./components";
import messages from "./i18n";
import './App.css';

function App() {
    //Hook
    const { hasError } = useError();
    const history = useHistory();
    const { setErrorMessage } = useErrorFunctions();
    const { loading } = useLoader();

    //Effects
    useEffect(() => {
        if (!process.env.REACT_APP_TOKEN || !process.env.REACT_APP_SPACES) {
            setErrorMessage(messages.error.noEnvsMessage, messages.error.noEnvs);
        }
        if (hasError) {
            history.push(ERROR);
        }
    }, [hasError, history]);

    useEffect(() => {
        if (!process.env.REACT_APP_TOKEN || !process.env.REACT_APP_SPACES) {
            setErrorMessage(messages.error.noEnvsMessage, messages.error.noEnvs);
            history.push(ERROR);
        }
    },[]);

    return (
        <div className="app">
            {loading && <Loader />}
            <Switch>
                {router.map(({ route, Component}, index) => (
                    <Route path={route} exact key={`route-${index}`}>
                        <Component />
                    </Route>
                ))}
                <Redirect to="/recipes" />
            </Switch>
        </div>
    );
}

export default App;
