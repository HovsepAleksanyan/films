import { useNavigate } from "react-router";

export const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className="landingPage">
            <div className="navBar">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/registrate")}>Registration</button>
            </div>
        </div>
    );
}