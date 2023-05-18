export const DELETE_ALL_FILMS = "DELETE_ALL_FILMS";
export const UPDATE_FILMS = "UPDATE_FILMS";


export const deleteAllFilms = () => {
    return {
        type: DELETE_ALL_FILMS
    }
}
export const updateFilms = (updatedFilmsList) => {
    return {
        type: UPDATE_FILMS,
        payload: updatedFilmsList
    }
}