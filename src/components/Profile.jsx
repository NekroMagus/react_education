import React from "react";
import ProfileImage from '../profile_image.jpg';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className="col-md-9">
            <div className="row">
                <div className="col-md-4">
                    <img src={ProfileImage} className={classes.img} alt="profile image"/>
                </div>
                <div className="col-md-7">
                    <p>My name is:</p>
                    <p>My surname is:</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;