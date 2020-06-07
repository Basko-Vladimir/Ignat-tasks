import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    loading: loadingReducer,
    settings: settingsReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;