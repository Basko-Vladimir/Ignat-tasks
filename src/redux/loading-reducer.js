const SET_LOADING = 'SET_LOADING';

const initialState = {
    isLoading: true
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loadingValue
            };
        default:
            return state;
    }
};

export const setLoading = (loadingValue) => ({type: SET_LOADING, loadingValue});

export default loadingReducer;