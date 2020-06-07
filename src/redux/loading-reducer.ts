import {api} from '../DAL/api';
import {Dispatch} from 'redux';

const SET_LOADING = 'ignatTasks/loadingReducer/SET_LOADING';
const SET_RESPONSE_MESSAGE = 'ignatTasks/loadingReducer/SET_RESPONSE_MESSAGE';
const SET_STATUS = 'ignatTasks/loadingReducer/SET_STATUS';
const UPDATE_CHECKED = 'ignatTasks/loadingReducer/UPDATE_CHECKED';

const initialState = {
    isLoading: false as boolean,
    responseMessage: '' as string,
    status: null as number | null,
    isChecked: false as boolean
};

type InitialStateType = typeof initialState;

const loadingReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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

type SetLoadingSuccessType = {
    type: typeof SET_LOADING
    isLoading: boolean
}
export const setLoadingSuccess = (isLoading: boolean):SetLoadingSuccessType => ({type: SET_LOADING, isLoading});
type SetResponseMessageSuccessType = {
    type: typeof SET_RESPONSE_MESSAGE
    errorText: string
}
export const setResponseMessageSuccess = (errorText: string): SetResponseMessageSuccessType => ({type: SET_RESPONSE_MESSAGE, errorText});
type SetStatusSuccessType = {
    type: typeof SET_STATUS
    status: number
}
const setStatusSuccess = (status: number): SetStatusSuccessType => ({type: SET_STATUS, status});
type UpdateCheckboxSuccessType = {
    type: typeof UPDATE_CHECKED
    isChecked: boolean
}
export const updateCheckboxSuccess = (isChecked: boolean): UpdateCheckboxSuccessType => ({type: UPDATE_CHECKED, isChecked});

type ActionTypes = SetLoadingSuccessType
    | SetResponseMessageSuccessType
    | SetStatusSuccessType
    | UpdateCheckboxSuccessType

export const sendMessage = (isChecked: boolean) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(setLoadingSuccess(true));
    const response = await api.sendMessage(isChecked);
    dispatch(setLoadingSuccess(false));
    dispatch(setResponseMessageSuccess(response.data.errorText));
    dispatch(setStatusSuccess(response.status))
};

export default loadingReducer;