import {usersAPI} from "../admin/api/api";

const GET_USERS = 'admin/users/GET_USERS';

let initialState = {
    users: []
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
};

export const getUsers = (users) => ({type: GET_USERS, users});

export const getUsersAPI = () => async(dispatch) => {
   let response = await usersAPI.getUsers();
        dispatch(getUsers(response.data));
};

export default UsersReducer;