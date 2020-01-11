let store = {
    _state: {
        user: {name: "Igor", surname: "Fliginskikh"},
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
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
      return this._state;
    },
    addMessage(message) {
        let newMessage = {
            chat_id: message.chat_id,
            message: message.message
        };
        this._state.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    updateMessage(message) {
        this._state.newMessageText = message;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};


export default store;