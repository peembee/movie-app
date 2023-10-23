import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Shows from "./pages/shows";
import About from "./pages/about.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movies", element: <Movies /> },
  { path: "/shows", element: <Shows /> },
  { path: "/about", element: <About /> },
]);
