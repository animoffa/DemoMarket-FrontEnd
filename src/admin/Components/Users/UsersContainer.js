import React from 'react';
import {getUsers, getUsersAPI} from "../../../Redux/UsersReducer";
import {connect} from "react-redux";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersAPI();
    }

    render() {
        return <Users users={this.props.users}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.Users.users
    }

};
export default connect(mapStateToProps, {getUsersAPI, getUsers})(UsersContainer);