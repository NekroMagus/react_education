import React from 'react';

const MyPosts = (props) => {

    const allPostElements = props.posts.map(x => <li>{x.text}</li>);
    debugger;
    let newPostText = props.newPostText;

    const createNewPost = () => {
        props.addPost();
    };

    const updatePost = (e) => {
        let body = e.target.value;
        props.changePost(body);
    };

    return (
        <div>
            {allPostElements}
            <textarea onChange={updatePost} value={newPostText}/>
            <button onClick={createNewPost}>Опубликовать</button>
        </div>
    );
};

export default MyPosts;