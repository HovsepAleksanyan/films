import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import "../../assets/styles/regLog.scss";

import { useSelector } from "react-redux";

export const Login = () => {

    const users = useSelector((state) => state.usersReducer.usersList);
    const admin = useSelector((state) => state.adminReducer.admin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const field = useRef();

    useEffect(() => {
        field.current.focus();
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const currentUser = users.find((u) => (u.email === email && u.password === password));

        if (
            email === admin.email,
            password === admin.password
        ) {
            navigate('/admin');
        } else if (currentUser) {
            navigate(`/films/${currentUser.id}`);
            localStorage.clear();
        } else {
            alert("There isn't any user with this email.");
        }
    }

    return (
        <div>
            <button onClick={() => navigate("/")} className="navBtn">Home</button>
            <form onSubmit={(Event) => handleSubmit(Event)} className="formBox">
                <p>Login</p>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(evt) => { setEmail(evt.target.value) }}
                    ref={field}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(evt) => { setPassword(evt.target.value) }}
                    required
                />
                <input type="submit" value="Sumbit" />
            </form>
        </div>
    );
}