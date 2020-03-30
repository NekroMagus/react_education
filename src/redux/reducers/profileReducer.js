import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 1, text: 'My first post'},
        {id: 2, text: 'My second post'},
        {id: 3, text: 'Third post'}
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: action.text
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS_PROFILE:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addNewPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatusProfile(res.data));
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusProfile(status));
            }
        });
};

export default profileReducer;