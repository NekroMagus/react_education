import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import React from "react";
import {addNewPost} from "../../../../redux/reducers/profileReducer";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts);

export default MyPostsContainer;