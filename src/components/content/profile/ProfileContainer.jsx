import {connect} from "react-redux";
import Profile from "./Profile";
import React, {Component} from "react";
import {setUserProfile} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(res => {
            this.props.setUserProfile(res.data);
        });
    }

    render() {
        return (
            <Profile {...this.state} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);