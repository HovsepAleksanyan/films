import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "../../../assets/styles/filmsList.scss";
import { deleteAllFilms, updateFilms } from "../../../store/films/films.actions";
import { useState } from "react";


export const FilmsList = () => {

    window.onbeforeunload = localStorage.clear();

    const filmsList = useSelector((state) => state.filmsReducer.filmsList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const localFilms = localStorage.getItem("films");
    const films = localFilms ? JSON.parse(localFilms) : filmsList;
    localStorage.setItem("films", JSON.stringify(films));

    const handleBack = () => {
        navigate(-1);
        localStorage.clear();
    }
    const handleDeleteAllFilms = () => {
        dispatch(deleteAllFilms());
        localStorage.removeItem("films")
    }

    const handleDeleteFilm = (id) => {
        const result = films.filter((f) => f.id !== id);

        dispatch(updateFilms(result));
        localStorage.setItem("films", JSON.stringify(result));
    }

    const handleDetails = (id) => {
        // localStorage.removeItem("film");
        navigate(`/admin/film-details/${id}`);
    }

    return (
        <div>
            <button className="navBtn" onClick={handleBack}>Back</button>
            <table className="filmsTable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        films?.map((f) => (
                            <tr key={f.id}>
                                <td className="title">{f.title}</td>
                                <td>{f.year}</td>
                                <td>
                                    <span onClick={() => handleDetails(f.id)}>&#128269;</span>
                                </td>
                                <td>
                                    <span onClick={() => handleDeleteFilm(f.id)}>&#10060;</span>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={4}>
                            <button onClick={handleDeleteAllFilms}>Delete All Films</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}