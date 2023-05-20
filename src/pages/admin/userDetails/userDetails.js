import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../../../store/users/users.action";
import { useParams, useNavigate } from "react-router";
import "../../../assets/styles/userDetails.scss";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

export const UserDetails = () => {

    const admin = useSelector((state) => state.adminReducer.admin);
    const users = useSelector((state) => state.usersReducer.usersList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [show, setShow] = useState(null);
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm();

    const localUser = localStorage.getItem("user");
    const user = localUser ? JSON.parse(localUser) : users.find((u) => (u.id === params.id));
    localStorage.setItem("user", JSON.stringify(user));

    const handleBack = () => {
        navigate(-1);
        localStorage.removeItem("user");
    }


    const handleUpdate = (data) => {
        const tmpUsers = users.filter((u) => u.email !== data.email);
        const checkAdmin = data.email === admin.email;
        const checkUser = tmpUsers.find((u) => (u.email === data.email));

        if (checkUser || checkAdmin) {
            alert("Please write another email.")
        } else {
            const result = users;

            const updUser = result.find((u) => u.id === user.id);
            updUser.name = data.name;
            updUser.surname = data.surname;
            updUser.age = data.age;
            updUser.email = data.email;
            updUser.password = data.password;

            localStorage.setItem("user", JSON.stringify(updUser));
            localStorage.setItem("users", JSON.stringify(result));
            dispatch(updateUsers(result));
            setShow(null);
        }
    }

    return (
        <Fragment>

            <button className="navBtn" onClick={handleBack}>Back</button>
            {
                user &&
                <table className="userTable">
                    <tbody>
                        <tr>
                            <th>ID:</th>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Surname:</th>
                            <td>{user.surname}</td>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td>{user.password}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button onClick={() => setShow(true)}>Update User</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
            {
                show &&
                <div className="editBox">
                    <button onClick={() => setShow(null)}>Close</button>
                    <form onSubmit={handleSubmit(handleUpdate)} className="editForm" >
                        <input
                            type="text"
                            {
                            ...register(
                                "name",
                                {
                                    required: "Fill in 'Name' field.",
                                    minLength: {
                                        value: 3,
                                        message: "'Name' is too short"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "'Name' is too long."
                                    }
                                }
                            )
                            }
                            defaultValue={user.name}
                            placeholder="Name"
                        />
                        <span>{errors?.name?.message}</span>
                        <input
                            type="text"
                            {
                            ...register(
                                "surname",
                                {
                                    required: "Write surname",
                                    minLength: {
                                        value: 4,
                                        message: "'Surname' is too short."
                                    },
                                    maxLength: {
                                        value: 13,
                                        message: "'Surname' is too long."
                                    }
                                }
                            )
                            }
                            defaultValue={user.surname}
                            placeholder="Surname"
                        />
                        <span>{errors?.surname?.message}</span>
                        <input
                            type="number"
                            {
                            ...register(
                                "age",
                                {
                                    required: "Fill in 'Age' field",
                                    min: {
                                        value: 13,
                                        message: "User's age can't be less than 13."
                                    }
                                }
                            )
                            }
                            min={10}
                            defaultValue={user.age}
                            placeholder="Age"
                        />
                        <span>{errors?.age?.message}</span>
                        <input
                            type="email"
                            {
                            ...register(
                                "email",
                                {
                                    required: "Fill in 'Email' field."
                                }
                            )
                            }
                            defaultValue={user.email}
                            placeholder="Email"
                        />
                        <span>{errors?.email?.message}</span>
                        <input
                            type="password"
                            {
                            ...register(
                                "password",
                                {
                                    required: "Fill in 'Password' field.",
                                    minLength: {
                                        value: 6,
                                        message: "'Password' is too short."
                                    }
                                }
                            )
                            }
                            defaultValue={user.password}
                            placeholder="Password"
                        />
                        <span>{errors?.password?.message}</span>
                        <input type="submit" value="Update" />
                    </form>
                </div>
            }

        </Fragment>
    );
}