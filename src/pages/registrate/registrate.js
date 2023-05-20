import { PropTypes } from "prop-types";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import "../../assets/styles/regLog.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../../store/users/users.action";


export const Registration = () => {

    const admin = useSelector((state) => state.adminReducer.admin);
    const users = useSelector((state) => state.usersReducer.usersList);
    const dispatch = useDispatch();
    const field = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();

    const handleRegister = (data) => {
        const checkAdmin = data.email === admin.email;
        const checkUser = users.find((u) => (u.email === data.email));

        if (checkUser || checkAdmin) {
            alert("Please write another email.");
        } else {
            let result = users;
            result = [
                ...result,
                data
            ]

            dispatch(updateUsers(result));
            localStorage.clear();
            navigate(`/films/${data.id}`);
        }
    }

    return (
        <div>
            <button onClick={() => navigate("/")} className="navBtn">Home</button>
            <form onSubmit={handleSubmit(handleRegister)} className="formBox" >
                <p>Registrate</p>
                <input type="hidden" {...register("id")} value={`${Math.random()}`} />
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

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

Registration.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func
}