import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Shows from "./pages/shows";
import About from "./pages/about.jsx";
import { DetailsMovieApi } from "./APIDetails/detailsMovieAPi";
import { DetailsShowApi } from "./APIDetails/DetailsShowApi";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movies", element: <Movies /> },
  { path: "/shows", element: <Shows /> },
  { path: "/about", element: <About /> },
  { path: "/details/movie/:id", element: <DetailsMovieApi /> },
  { path: "/details/show/:id", element: <DetailsShowApi /> },
]);
