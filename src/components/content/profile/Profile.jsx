import React from "react";
import ProfileImage from '../../../profile_image.jpg';
import css from './Profile.module.css';
import MyPosts from "./posts/MyPosts";

const Profile = (props) => {
    return (
        <section className="col-md-9">
            <div className="row">
                <div className="col-md-4">
                    <img src={ProfileImage} className={css.img} alt="profile image"/>
                </div>
                <div className="col-md-7">
                    <p>My name is: {props.profilePage.user.name}</p>
                    <p>My surname is: {props.profilePage.user.surname}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                             dispatch={props.dispatch}/>
                </div>
            </div>
        </section>
    );
};

export default Profile;