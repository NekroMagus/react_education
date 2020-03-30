const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                chat_id: action.chat_id,
                message: action.text
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
};

export const addMessage = (text) => ({type: ADD_MESSAGE, text, chat_id: 1});

export default dialogsReducer;