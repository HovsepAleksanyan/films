import { PropTypes } from "prop-types";
import { useNavigate } from "react-router";
import { useState } from "react";
import "../../assets/styles/regLog.scss";


export const Login = ({ users, admins }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const currentAdmin = admins.find((a) => (a.email === email && a.password === password));
        const currentUser = users.find((u) => (u.email === email && u.password === password));

        if (currentAdmin) {
            // navigate("/");
            console.log(currentAdmin);
        } else if (currentUser) {
            navigate(`/films/${currentUser.id}`);
        } else {
            console.log("asdasd");
        }
    }

    return (
        <div>
            <button onClick={()=>navigate("/")} className="navBtn">Home</button>
            <form onSubmit={(Event) => handleSubmit(Event)} className="formBox">
                <p>Login</p>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(evt) => { setEmail(evt.target.value) }}
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

Login.propTypes = {
    users: PropTypes.array,
    admins: PropTypes.array
}