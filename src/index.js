import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import LogIn from "./pages/login/LogIn";
import Movies from "./pages/movies/Movies";
import AddMovie from "./pages/movies/AddMovie";
import Movie from "./pages/movies/Movie";
import NotFound from "./pages/notFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/movies" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path=":title" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </>
);
