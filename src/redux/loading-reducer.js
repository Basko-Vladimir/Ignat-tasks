import {api} from "../DAL/api";

const SET_LOADING = 'ignatTasks/loadingReducer/SET_LOADING';
const SET_RESPONSE_MESSAGE = 'ignatTasks/loadingReducer/SET_RESPONSE_MESSAGE';
const SET_STATUS = 'ignatTasks/loadingReducer/SET_STATUS';
const UPDATE_CHECKED = 'ignatTasks/loadingReducer/UPDATE_CHECKED';

const initialState = {
    isLoading: false,
    responseMessage: '',
    status: '',
    isChecked: false
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                responseMessage: action.errorText
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
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

export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading});
export const setResponseMessage = (errorText) => ({type: SET_RESPONSE_MESSAGE, errorText});
const setStatus = (status) => ({type: SET_STATUS, status});
export const updateCheckbox = (isChecked) => ({type: UPDATE_CHECKED, isChecked});


export const sendMessage = (isChecked) => async (dispatch) => {
    dispatch(setLoading(true));
    const response = await api.sendMessage(isChecked);
    dispatch(setLoading(false));
    dispatch(setResponseMessage(response.data.errorText));
    dispatch(setStatus(response.status))
};

export default loadingReducer;