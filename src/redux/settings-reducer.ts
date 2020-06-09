const SET_THEME = 'ignatTasks/settingsReducer/SET_THEME';

const initialState = {
    style: ''
};
type InitialStatetype = typeof initialState;

const settingsReducer = (state = initialState, action: setThemeSuccessType): InitialStatetype => {
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

type setThemeSuccessType = {
    type: typeof SET_THEME
    theme: string
}
export const setThemeSuccess = (theme: string): setThemeSuccessType => ({type: SET_THEME, theme});

export default settingsReducer;