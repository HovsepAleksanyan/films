import { useParams, useNavigate } from "react-router";
import "../../assets/styles/films.scss";
import userIcon from "./user-icon.jpg";

export const Films = ({ users, films }) => {

    const navigate = useNavigate();
    const params = useParams();
    const user = users.find((u) => (u.id === params.id));

    const handleClick = (id) => {
        navigate(`/watch-film/${id}`);
    }

    return (
        <div>
            <div className="user">
                <img src={userIcon} alt="user-icon" />
                <span>{user?.name}</span>
                <span>{user?.surname}</span>
            </div>

            <div className="filmsList">
                {
                    films?.map((f) => (
                        <div className="filmBox" key={f.id}>
                            <figure onClick={() => handleClick(f.id)}>
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