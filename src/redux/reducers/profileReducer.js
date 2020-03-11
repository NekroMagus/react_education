const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    user: {name: "Igor", surname: "Fliginskikh"},
    posts: [
        {id: 1, text: 'My first post'},
        {id: 2, text: 'My second post'},
        {id: 3, text: 'Third post'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
            };
        default:
            return state;
    }
};

export default profileReducer;