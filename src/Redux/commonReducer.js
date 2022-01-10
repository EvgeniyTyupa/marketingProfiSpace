import { googleApi } from "../Api/api";

const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_REGISTERED = 'SET_IS_REGISTERED';
const SET_CURRENT_PATH = 'SET_CURRENT_PATH';
const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';

let initialState = {
    isFetching: false,
    isRegistered: false,
    currentPath: window.location.pathname,
    currentLanguage: "ru"
}

const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_IS_REGISTERED: {
            return { ...state, isRegistered: action.isRegistered }
        }
        case SET_CURRENT_PATH: {
            return { ...state, currentPath: action.currentPath }
        }
        case SET_CURRENT_LANGUAGE: {
            return { ...state, currentLanguage: action.currentLanguage }
        }
        default: 
            return state;
    }
}

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING, isFetching
});
export const setIsRegistered = (isRegistered) => ({
    type: SET_IS_REGISTERED, isRegistered
});
export const setCurrentPath = (currentPath) => ({
    type: SET_CURRENT_PATH, currentPath
});
export const setCurrentLanguage = (currentLanguage) => ({
    type: SET_CURRENT_LANGUAGE, currentLanguage
});

export const register = (formData) => async (dispatch) => {
    dispatch(setIsFetching(true));
    try{
        await googleApi.saveDataToGoogleSheet(formData);
        dispatch([setIsRegistered(true), setIsFetching(false)]);
    }catch(err){
        dispatch(setIsFetching(false));
    }
}

export default commonReducer;
