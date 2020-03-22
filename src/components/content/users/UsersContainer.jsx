import React, {Component} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {follow, getUsers, toggleInProgress, unfollow} from "../../../redux/reducers/usersReducer";

class UsersContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             follow={this.props.follow}
                             unfollow={this.props.unfollow}
                             followingInProgress={this.props.followingInProgress}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default connect(mapStateToProps, {
    follow, unfollow,
    toggleInProgress, getUsers
})(UsersContainer);