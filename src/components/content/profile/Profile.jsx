import React from "react";
import ProfileImage from '../../../profile_image.jpg';
import css from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className="col-md-9">
            <div className="row">
                <div className="col-md-4">
                    <img src={ProfileImage} className={css.img} alt="profile image"/>
                </div>
                <div className="col-md-7">
                    <p>My name is: {props.user.name}</p>
                    <p>My surname is: {props.user.surname}</p>
                </div>
            </div>
        </section>
    );
};

export default Profile;