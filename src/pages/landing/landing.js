import { Fragment } from "react";
import { useNavigate } from "react-router";

export const Landing = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className="navBar">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/registrate")}>Registration</button>
            </div>
        </Fragment>
    );
}