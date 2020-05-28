import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";
import thunk from "redux-thunk";

const Reducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));
export default store;