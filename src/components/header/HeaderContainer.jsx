import React, {Component} from "react";
import Header from "./Header";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData, toggleIsFetching} from "../../redux/reducers/authReducer";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false);
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);