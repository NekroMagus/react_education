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
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            chat_id: action.chat_id,
            message: state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_MESSAGE) {
        state.newMessageText = action.message;
    }
    return state;
};

export default dialogsReducer;