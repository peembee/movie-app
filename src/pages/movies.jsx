import { Container } from "@mui/system";
import Navbar from "../shared/navbar";
import "../style/sharedByAll.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";
import { ApiAllMovies } from "../APIMovies/apiAllMovies";
import { UpcomingMoviesApi } from "../APIMovies/upcomingMoviesApi";
import { TopRatedMoviesApi } from "../APIMovies/topRatedMoviesApi";
import { PopularMoviesApi } from "../APIMovies/popularMoviesApi";

export default function Movies() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);
  const documentTitle = appName.appName + " - Movies";
  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------
  return (
    <>
      <Navbar currentPage="Movies" />
      <Container maxWidth="m">
        <br />

        <div>
          <h2 className="topTitles">Upcoming</h2>
          <UpcomingMoviesApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="topTitles">Top Rated</h2>
          <TopRatedMoviesApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="topTitles">Most Popular</h2>
          <PopularMoviesApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="topTitles">Movies</h2>
          <ApiAllMovies />
          <br />
          <br />
        </div>
      </Container>
    </>
  );
}
