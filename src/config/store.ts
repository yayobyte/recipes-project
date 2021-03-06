import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { assetsReducer, recipesReducer, errorReducer, selectedReducer, entriesReducer } from "../redux/reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
    root: combineReducers({
        recipes: recipesReducer,
        assets: assetsReducer,
        error: errorReducer,
        selected: selectedReducer,
        entries: entriesReducer,
    }),
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
);

export default store;
