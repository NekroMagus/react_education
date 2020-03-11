const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Peter'},
        {id: 3, name: 'Anya'},
        {id: 4, name: 'Elena'}
    ],
    messages: [
        {chat_id: 1, message: 'Hi'},
        {chat_id: 1, message: 'Hello'},
        {chat_id: 1, message: 'How are u?'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                chat_id: action.chat_id,
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.message
            };
        default:
            return state;
    }
};

export default dialogsReducer;