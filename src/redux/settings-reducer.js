const SET_THEME = 'SET_THEME';

const initialState = {
    style: ''
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
            ...state,
            style: action.theme
            };
        default:
            return state;
    }
};

export const setTheme = (theme) => ({type: SET_THEME, theme});

export default settingsReducer;