export const UPDATE_ADMIN_DATA = "UPDATE_ADMIN_DATA";

export const updateAdminData = (newObj) => {
    return {
        type: UPDATE_ADMIN_DATA,
        payload: newObj
    }
}