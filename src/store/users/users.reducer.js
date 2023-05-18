import { UPDATE_USERS, DELETE_ALL_USERS } from "./users.action";


const initalState = {
    usersList: [
        {
            id: `${Math.random()}`,
            name: "Hovsep",
            surname: "Aleksanyan",
            age: 17,
            email: "hovsep@gmail.com",
            password: "pas123"
        },
        {
            id: `${Math.random()}`,
            name: "Andranik",
            surname: "Karapetyan",
            age: 55,
            email: "adnranik@gmail.com",
            password: "pas123"
        },
        {
            id: `${Math.random()}`,
            name: "Armen",
            surname: "Aleksanyan",
            age: 49,
            email: "armen@gmail.com",
            password: "pas123"
        }
    ]
};

export const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case DELETE_ALL_USERS:
            return {
                ...state,
                usersList: []
            }

        case UPDATE_USERS:
            return {
                ...state,
                usersList: action.payload
            }

        default:
            return state
    }
}