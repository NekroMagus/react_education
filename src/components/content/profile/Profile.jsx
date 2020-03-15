import React, {Component} from "react";
import ProfileImage from '../../../profile_image.jpg';
import css from './Profile.module.css';
import MyPostsContainer from "./posts/MyPostsContainer";

class Profile extends Component {
    render() {
        return (
            <section className="col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <img src={ProfileImage} className={css.img} alt="profile image"/>
                    </div>
                    <div className="col-md-7">
                        <p>My name is: {this.props.name}</p>
                        <p>My surname is: {this.props.surname}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <MyPostsContainer/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;