export const DELETE_ALL_USERS = "DELETE_ALL_USERS";
export const UPDATE_USERS = "UPDATE_USERS";


export const deleteAllUsers = () => {
    return {
        type: DELETE_ALL_USERS
    }
}
export const updateUsers = (updatedUsersList) => {
    return {
        type: UPDATE_USERS,
        payload: updatedUsersList
    }
}