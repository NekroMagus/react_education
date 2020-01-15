const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: state.posts.length + 1,
            text: state.newPostText
        };
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_POST) {
        state.newPostText = action.text;
    }
    return state;
};

export default profileReducer;