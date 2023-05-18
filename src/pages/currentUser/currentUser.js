import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import "../../assets/styles/currentUser.scss";

import { updateUsers } from "../../store/users/users.action";

export const CurrentUser = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        resetField,
    } = useForm();

    const params = useParams();
    const navigate = useNavigate();
    const users = useSelector((state) => state.usersReducer.usersList);
    const dispatch = useDispatch();

    const localUser = localStorage.getItem("user");
    const user = localUser ? JSON.parse(localUser) : users.find((u) => (u.id === params.id));
    localStorage.setItem("user", JSON.stringify(user));

    const changePassword = (data) => {
        if (
            user.password === data.prevPassword &&
            data.newPassword === data.repeatNewPassword
        ) {
            const list = users;
            const current = list.find((u) => u.id === user.id);
            current.password = data.newPassword;

            resetField("newPassword");
            resetField("repeatNewPassword");
            resetField("prevPassword")
            dispatch(updateUsers(list));
            localStorage.setItem("user", JSON.stringify(current));
            alert("Success password change!")
        } else {
            if (user.password !== data.prevPassword) {
                alert("Write correct password")
            } else if (data.newPassword !== data.repeatNewPassword) {
                alert("'Repeat password' don't match to 'new password'");
            }
        }
    }

    const handleBack = () => {
        navigate(-1);
    } 

    return (
        <Fragment>
            <button className="navBtn" onClick={handleBack}>Back</button>
            {
                user &&
                <div className="currentUser">
                    <div>
                        <p>{`${user.name} ${user.surname}`}</p>
                        <p>{user.email}</p>
                    </div>

                    <form onSubmit={handleSubmit(changePassword)}>
                        <p>Change password</p>
                        <input
                            type="password"
                            {
                            ...register(
                                "prevPassword",
                                {
                                    required: true
                                }
                            )
                            }
                            placeholder="Write password."
                        />
                        <span>{errors?.prevPassword?.message}</span>
                        <input
                            type="password"
                            {
                            ...register(
                                "newPassword",
                                {
                                    required: "Write new password",
                                    minLength: {
                                        value: 6,
                                        message: "Write min. 6 characters"
                                    }
                                }
                            )
                            }
                            placeholder="Write new password"
                        />
                        <span>{errors?.newPassword?.message}</span>
                        <input
                            type="password"
                            {
                            ...register(
                                "repeatNewPassword",
                                {
                                    required: "Repeat the new password",
                                    minLength: {
                                        value: 6,
                                        message: "Write min. 6 characters"
                                    }
                                }
                            )
                            }
                            placeholder="Repeat new password"
                        />
                        <span>{errors?.repeatNewPassword?.message}</span>
                        <input type="submit" value="Change Password" />
                    </form>
                </div>
            }
        </Fragment>
    );
}