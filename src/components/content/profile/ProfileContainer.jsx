import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        name: state.profilePage.user.name,
        surname: state.profilePage.user.surname,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;