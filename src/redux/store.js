import {createStore} from "redux";

const SET_LOADING = 'SET_LOADING';

const initialState = {
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.loadingValue
            };
        default:
            return state;
    }
};

export const setLoadingAC = (loadingValue) => ({type: SET_LOADING, loadingValue});

const store = createStore(reducer);
export default store;