import { UPDATE_ADMIN_DATA } from "./admin.action";

const initialState = {
    admin: { name: "Main_Admin", email: "admin@admin.com", password: "main_admin" }
}


export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ADMIN_DATA:
            return {
                ...state,
                admin: action.payload
            }

        default:
            return state
    }

}