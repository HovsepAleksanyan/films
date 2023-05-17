import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const WatchFilm = ({ films }) => {

    const params = useParams();
    const navigate = useNavigate();

    const film = films?.find((f) => (f.id === +params.id))


    return (
        <div>
            <button onClick={()=>navigate(-1)} className="navBtn">Back</button>
            {film &&
                <div>
                    <figure>
                        <img src={film?.image} alt={`${film?.title}'s poster`} />
                    </figure>
                    <table>
                        <tbody>
                            <tr>
                                <td>Title:</td>
                                <td>{film?.title}</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>{film?.year}</td>
                            </tr>
                            <tr>
                                <td>Genre:</td>
                                <td>{film?.genre}</td>
                            </tr>
                            <tr>
                                <td>Watch:</td>
                                <Link to={film?.link}>
                                    <button>Click</button>
                                </Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}