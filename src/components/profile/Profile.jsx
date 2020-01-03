import React from "react";
import ProfileImage from '../../profile_image.jpg';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <main className="col-md-9">
            <div className="row">
                <div className="col-md-4">
                    <img src={ProfileImage} className={css.img} alt="profile image"/>
                </div>
                <div className="col-md-7">
                    <p>My name is:</p>
                    <p>My surname is:</p>
                </div>
            </div>
        </main>
    );
};

export default Profile;