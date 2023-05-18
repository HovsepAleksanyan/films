import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../assets/styles/watchFilm.scss";

import { useSelector, useDispatch } from "react-redux";
import { updateFilms } from "../../store/films/films.actions";

export const WatchFilm = () => {

    const {
        register,
        handleSubmit,
        resetField,
        formState: {
            errors
        }
    } = useForm()

    const films = useSelector((state) => state.filmsReducer.filmsList);
    const dispatch = useDispatch();

    const params = useParams();
    const navigate = useNavigate();

    const localFilm = localStorage.getItem("film");
    const film = localFilm ? JSON.parse(localFilm) : films?.find((f) => (f.id === params.id));
    localStorage.setItem("film", JSON.stringify(film));

    const handleAdd = (data) => {
        const result = films;
        const commented = result.find((f) => f.id === film.id);
        commented.comments = [
            ...film.comments,
            {
                id: `${Math.random()}`,
                text: data.comment
            }
        ]

        resetField("comment");
        localStorage.setItem("film", JSON.stringify(commented));
        dispatch(updateFilms(result));
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} className="navBtn">Back</button>
            {film &&
                <div className="watchFilmBox">
                    <div className="dataBox">
                        <figure>
                            <img src={film.image} alt="Poster of the film" />
                        </figure>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title:</th>
                                    <td>{film.title}</td>
                                </tr>
                                <tr>
                                    <th>Year:</th>
                                    <td>{film.year}</td>
                                </tr>
                                <tr>
                                    <th>Genre:</th>
                                    <td>{film.genre}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="watchBtn">
                                        <Link to={film.link} target="_blank" >
                                            <button>Watch</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {

                        film.comments &&

                        <div className="commentBox">
                            <form className="commentForm" onSubmit={handleSubmit(handleAdd)}>
                                <div>
                                    <textarea
                                        {
                                        ...register(
                                            "comment",
                                            {
                                                required: "You can't add empty comment",
                                                minLength: {
                                                    value: 5,
                                                    message: "Minimal count of character is 5"
                                                },
                                                maxLength:{
                                                    value:34,
                                                    message: "Maximal count of character is 34"
                                                }
                                            }
                                        )
                                        }
                                        placeholder="Wrte your comment..."
                                    ></textarea>
                                    <span>{errors?.comment?.message}</span>
                                </div>
                                <input type="submit" value="Add Comment" />
                            </form>
                            {
                                film?.comments.length > 0 ?
                                    <div className="box">
                                        {
                                            film?.comments?.map((c) => (
                                                <p key={c.id}>{c.text}</p>
                                            ))
                                        }
                                    </div>
                                    :
                                    ""
                            }
                        </div>

                    }
                </div>
            }
        </div>
    );
}