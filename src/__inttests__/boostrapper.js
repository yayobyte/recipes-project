import React from 'react';
import {render} from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store  from "../config/store";
import '../index.css';
import App from '../App';

const MainApp = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

const renderApp = () => {
    const { getByTestId, queryAllByTestId, getAllByText, container, getByText } = render(<MainApp />);
    return {
        getByTestId,
        queryAllByTestId,
        getAllByText,
        container,
        getByText,
    };
};

export default renderApp;