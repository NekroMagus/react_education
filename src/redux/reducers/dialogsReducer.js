const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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