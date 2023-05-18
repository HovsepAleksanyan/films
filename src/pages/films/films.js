import { useParams, useNavigate } from "react-router";
import "../../assets/styles/films.scss";
import userIcon from "./user-icon.jpg";
import { Loading } from "../../components/loading";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Films = () => {

    const usersList = useSelector((state) => state.usersReducer.usersList);
    const films = useSelector((state) => state.filmsReducer.filmsList);

    const navigate = useNavigate();
    const params = useParams();

    const localUser = localStorage.getItem("user");
    const user = localUser ? JSON.parse(localUser) : usersList.find((u) => (u.id === params.id));
    localStorage.setItem("user", JSON.stringify(user));

    const handleWatch = (id) => {
        localStorage.removeItem("film");
        navigate(`/watch-film/${id}`);
    }

    const handleHome = () => {
        localStorage.clear();
        navigate("/");
    }

    const handleCurrentUser = () => {
        navigate(`/current-user/${user.id}`);
    }

    return (
        <div>
            <div className="user" onClick={handleCurrentUser}>
                <img src={userIcon} alt="user-icon" />
                <span>{user?.name}</span>
                <span>{user?.surname}</span>
            </div>

            <button className="navBtn" onClick={handleHome}>Home</button>

            <div className="filmsList">
                {
                    films?.map((f) => (
                        <div className="filmBox" key={f.id}>
                            <figure onClick={() => handleWatch(f.id)}>
                                <img src={f?.image} alt={`${f?.title}'s poster`} />
                            </figure>
                            <p className="title">{f?.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}