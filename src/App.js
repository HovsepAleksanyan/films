import { useState } from "react";

import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registrate/registrate";
import { Films } from "./pages/films/films";
import { WatchFilm } from "./pages/watchFilm/watchFilm";

import { userList } from "./Datas/Users/usersData";
import { adminList } from "./Datas/Admin/adminData";
import { filmList } from "./Datas/Films/filmsData";

function App() {

  const [users, setUsers] = useState(userList);
  const [films, setFilms] = useState(filmList);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login users={users} admins={adminList} />} />
        <Route path="/registrate" element={<Registration users={users} setUsers={setUsers} />} />
        <Route path="/films/:id" element={<Films users={users} films={films} />} />
        <Route path="/watch-film/:id" element={<WatchFilm films={films} />} />
      </Routes>
    </div>
  );
}

export default App;
