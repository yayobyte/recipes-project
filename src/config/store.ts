import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { assetsReducer, recipesReducer } from "../redux/reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
    root: combineReducers({
        recipes: recipesReducer,
        assets: assetsReducer,
    }),
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);

export default store;
