const SET_THEME = 'SET_THEME';
const UPDATE_CHECKED = 'UPDATE_CHECKED';

const initialState = {
    style: '',
    isChecked: false
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
            ...state,
            style: action.theme
            };
        case UPDATE_CHECKED:
            return {
                ...state,
                isChecked: action.isChecked
            };
        default:
            return state;
    }
};

export const setTheme = (theme) => ({type: SET_THEME, theme});
export const updateCheckbox = (isChecked) => ({type: UPDATE_CHECKED, isChecked});

export default settingsReducer;