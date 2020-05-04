import {combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";

const Reducers = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer
});

const store = createStore(Reducers);
export default store;