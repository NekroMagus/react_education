import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;