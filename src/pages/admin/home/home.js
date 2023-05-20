import { Fragment } from "react";
import { useNavigate } from "react-router"


export const AdminHome = () => {

    const navigate = useNavigate();

    const handleUsers = () => {
        navigate("/admin/users");
    }

    const handleFilms = () => {
        navigate("/admin/films");
    }

    const handleHome = () => {
        navigate("/");
        localStorage.clear();
    }

    return (
        <Fragment>
            <button className="navBtn" onClick={handleHome} >Home</button>
            <div className="navBar">
                <button style={{ borderRadius: "10px" }} onClick={handleUsers}>Users</button>
                <button style={{ borderRadius: "10px" }} onClick={handleFilms}>Films</button>
            </div>
        </Fragment>
    );

}