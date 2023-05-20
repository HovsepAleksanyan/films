import { useDispatch, useSelector } from "react-redux";
import { updateFilms } from "../../../store/films/films.actions";
import { useNavigate, useParams } from "react-router";
import "../../../assets/styles/filmDetails.scss";

export const FilmDetails = () => {

    const films = useSelector((state) => state.filmsReducer.filmsList);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const localFilm = localStorage.getItem("film");
    const film = localFilm ? JSON.parse(localFilm) : films.find((u) => (u.id === params.id));
    localStorage.setItem("film", JSON.stringify(film));

    const handleDeleteComment = (id) => {
        const list = films;
        const tmpFilm = list.find((f) => f.id === params.id);
        const resultComments = tmpFilm?.comments?.filter((c) => c.id !== id);
        tmpFilm.comments = resultComments;

        dispatch(updateFilms(list));
        localStorage.setItem("films", JSON.stringify(list));

        // Rerender chi exni
    }

    const handleBack = () => {
        navigate(-1);
    }
console.log('asdads');
    return (
        <div>
            <button className="navBtn" onClick={handleBack}>Back</button>

            <table className="filmTable">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{film?.id}</td>
                    </tr>
                    <tr>
                        <th>Titile</th>
                        <td>{film?.title}</td>
                    </tr>
                    <tr>
                        <th>Year</th>
                        <td>{film?.year}</td>
                    </tr>
                    <tr>
                        <th>Genre</th>
                        <td>{film?.genre}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={3}>Comments</th>
                    </tr>
                    {
                        film?.comments?.map((c) => (
                            <tr key={c.id}>
                                <td className="comment" colSpan={2}>{c.text}</td>
                                <td style={{ textAlign: "end" }}>
                                    <span onClick={() => handleDeleteComment(c.id)}>&#10060;</span>
                                </td>
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>
    );
}