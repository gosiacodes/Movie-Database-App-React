import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LogIn from "./pages/login/LogIn";
import Movies from "./pages/movies/Movies";
import AddMovie from "./pages/movies/AddMovie";
import Movie from "./pages/movies/Movie";
import NotFound from "./pages/notFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/movies" element={<Layout />}>
          <Route index element={<Movies />}></Route>
          <Route path="addMovie" element={<AddMovie />}></Route>
          <Route path=":title" element={<Movie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
