import { useState } from "react";

import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registrate/registrate";
import { Films } from "./pages/films/films";
import { WatchFilm } from "./pages/watchFilm/watchFilm";
import { CurrentUser } from "./pages/currentUser/currentUser";
import { AdminHome } from "./pages/admin/home/home";
import { Users } from "./pages/admin/users/users";
import { UserDetails } from "./pages/admin/userDetails/userDetails";
import { FilmsList } from "./pages/admin/films/filmsList";
import { FilmDetails } from "./pages/admin/filmDetails/filmsDetails";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<Registration />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/watch-film/:id" element={<WatchFilm />} />
        <Route path="/current-user/:id" element={<CurrentUser />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/user-details/:id" element={<UserDetails />} />
        <Route path="/admin/films" element={<FilmsList />} />
        <Route path="/admin/film-details/:id" element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
