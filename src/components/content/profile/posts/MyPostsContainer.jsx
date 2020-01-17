import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/state";
import React from "react";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePost: (body) => {
            dispatch(changePostActionCreator(body));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;