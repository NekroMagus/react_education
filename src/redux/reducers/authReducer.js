import {authAPI} from "../../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
            dispatch(toggleIsFetching(false));
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
            dispatch(toggleIsFetching(false));
        });
};

export default authReducer;