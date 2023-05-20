import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "../../../assets/styles/users.scss";
import { deleteAllUsers, updateUsers } from "../../../store/users/users.action";
import { useState } from "react";
import { useForm } from "react-hook-form";


export const Users = () => {

    window.onbeforeunload = localStorage.clear();

    const admin = useSelector((state) => state.adminReducer.admin);
    const usersList = useSelector((state) => state.usersReducer.usersList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(null);
    const {
        register,
        handleSubmit,
        resetField,
        formState: {
            errors
        }
    } = useForm();

    const localUsers = localStorage.getItem("users");
    const users = localUsers ? JSON.parse(localUsers) : usersList;
    localStorage.setItem("users", JSON.stringify(users));


    const hadleDeleteUser = (id) => {
        const result = users.filter((u) => u.id !== id);

        dispatch(updateUsers(result));
        localStorage.setItem("users", JSON.stringify(result));
    }

    const handleDeleteAllUsers = () => {
        dispatch(deleteAllUsers());
        localStorage.removeItem("users");
    }

    const handleDetails = (id) => {
        localStorage.removeItem("user");
        navigate(`/admin/user-details/${id}`);
    }

    const handleAdd = (data) => {
        const checkAdmin = admin.email === data.email;
        const checkUser = users.find((u) => u.email === data.email);


        if (checkUser || checkAdmin) {
            alert("Please write another email.");
        } else {
            const result = [
                ...users,
                {
                    id: data.id,
                    name: data.name,
                    surname: data.surname,
                    age: data.age,
                    email: data.email,
                    password: data.password
                }
            ];


            dispatch(updateUsers(result));
            localStorage.setItem("users", JSON.stringify(result));
            resetField("name");
            resetField("surname");
            resetField("age");
            resetField("email");
            resetField("password");
            setShow(null);
        }


    }

    const handleBack = () => {
        navigate(-1);
        localStorage.clear();
    }

    return (
        <div>
            <button className="navBtn" onClick={handleBack}>Back</button>
            {
                users &&
                <table className="usersTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <td colSpan={2}>
                                <button className="addBtn" onClick={() => setShow(true)}>Add User</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.name}</td>
                                    <td>{u.surname}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <span onClick={() => handleDetails(u.id)}>&#128269;</span>
                                    </td>
                                    <td>
                                        <span onClick={() => hadleDeleteUser(u.id)}>&#10060;</span>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={5}>
                                <button onClick={handleDeleteAllUsers} >Delete All Users</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
            {
                show &&
                <div className="addBox">
                    <button onClick={() => setShow(null)}>Close</button>
                    <form onSubmit={handleSubmit(handleAdd)}>
                        <input
                            type="hidden"
                            {
                            ...register("id")
                            }
                            value={`${Math.random()}`}
                        />
                        <input
                            type="text"
                            {
                            ...register(
                                "name",
                                {
                                    required: "Fill in 'Name' field.",
                                    minLength: {
                                        value: 3,
                                        message: "'Name' is too short."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "'Name' is too long."
                                    }
                                }
                            )
                            }
                            placeholder="Write name..."
                        />
                        <span>{errors?.name?.message}</span>
                        <input
                            type="text"
                            {
                            ...register(
                                "surname",
                                {
                                    required: "Fill in 'Surname' field.",
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
                            placeholder="Write surname..."
                        />
                        <span>{errors?.surname?.message}</span>
                        <input
                            type="number"
                            {
                            ...register(
                                "age",
                                {
                                    required: "Write your age.",
                                    min: {
                                        value: 13,
                                        message: "You must be older than 12."
                                    }
                                }
                            )
                            }
                            min={10}
                            placeholder="Write age..."
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
                            placeholder="Write email..."
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
                            placeholder="Write password..."
                        />
                        <span>{errors?.password?.message}</span>
                        <input type="submit" value="Add" />
                    </form>
                </div>
            }
        </div>
    );
}