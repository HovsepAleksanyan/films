import { useState } from "react";

import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registrate/registrate";
import { Films } from "./pages/films/films";
import { WatchFilm } from "./pages/watchFilm/watchFilm";
import { CurrentUser } from "./pages/currentUser/currentUser";

import { adminList } from "./Datas/Admin/adminData";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login admins={adminList} />} />
        <Route path="/registrate" element={<Registration />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/watch-film/:id" element={<WatchFilm />} />
        <Route path="/current-user/:id" element={<CurrentUser />} />
      </Routes>
    </div>
  );
}

export default App;
