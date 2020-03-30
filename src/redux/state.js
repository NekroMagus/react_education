import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            user: {name: "Igor", surname: "Fliginskikh"},
            posts: [
                {id: 1, text: 'My first post'},
                {id: 2, text: 'My second post'},
                {id: 3, text: 'Third post'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Peter'},
                {id: 3, name: 'Anya'},
                {id: 4, name: 'Elena'}
            ],
            messages: [
                {chat_id: 1, message: 'Hi'},
                {chat_id: 1, message: 'Hello'}
            ],
            newMessageText: ''
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export const addMessageActionCreator = (text) => ({
    type: ADD_MESSAGE,
    chat_id: 1
});

export const changeTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE,
    message: text
});

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const changePostActionCreator = (text) => ({
    type: UPDATE_POST,
    text: text
});

export default store;