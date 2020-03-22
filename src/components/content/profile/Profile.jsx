import React, {Component} from "react";
import css from './Profile.module.css';
import MyPostsContainer from "./posts/MyPostsContainer";
import Preloader from "../../common/preloader/Preloader";

class Profile extends Component {

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <section className="col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.profile.photos.large
                        || "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"}
                             className={css.img} alt="profile image"/>
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