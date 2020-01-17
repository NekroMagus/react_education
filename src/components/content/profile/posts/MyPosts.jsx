import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/state";

const MyPosts = (props) => {

    const allPostElements = props.posts.map(x => <li>{x.text}</li>);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const changePost = (e) => {
        let text = e.target.value;
        props.dispatch(changePostActionCreator(text));
    };

    return (
        <div>
            {allPostElements}
            <textarea onChange={changePost} value={props.newPostText}/>
            <button onClick={addPost}>Опубликовать</button>
        </div>
    );
};

export default MyPosts;