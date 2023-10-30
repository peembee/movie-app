import { useEffect, useState } from "react";
import axios from "axios";
import { ApiConfigs } from "../APIConfig/config";
import { useParams } from "react-router-dom";
import "../style/sharedByAll.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Navbar from "../shared/navbar";
import { Container } from "@mui/system";
import { AppContext } from "../shared/GlobalAppNameContext";
import { useContext } from "react";

export function DetailsMovieApi() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName.appName + " - Details/Show";

  useEffect(() => {
    document.title = documentTitle;
  });

  // getting API-Keys from config-file
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const { options } = ApiConfigs.movieDetailsApi;

  console.log("id är från details: ", id);

  useEffect(() => {
    setIsLoading(true);
    // Create an AbortController to cancel network requests when the component unmounts.
    const controller = new AbortController();

    async function fetchData() {
      try {
        const AllMovieResponse = await axios.get(url, {
          ...options,
          signal: controller.signal,
        });

        setMovieData(AllMovieResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData(); // call fetchData
    return () => {
      controller.abort();
    };
  }, [options, url]);
  console.log("deatils.data: ", movieData);
  return (
    <>
      <Navbar />
      <Container maxWidth="m">
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress className="loadingIcon" />
          </Box>
        ) : (
          <div className="containerDetails">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              className="detailPageImageSize"
            />
            <div className="detailInfoContainer">
              <h1>{movieData.original_title}</h1>

              {movieData.homepage && (
                <h4 className="detailMovieText">
                  Stream At:{" "}
                  <a
                    href={movieData.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detailsLinkToPage"
                  >
                    {movieData.homepage}
                  </a>
                </h4>
              )}

              {movieData.overview && (
                <h4 className="detailMovieText">
                  <br />
                  {movieData.overview}
                </h4>
              )}
              <br />
              <br />
              <br />
              {movieData.genres && (
                <h4 className="detailMovieText">
                  {"Genres: "}
                  {movieData.genres.map((genre) => genre.name).join(", ")}
                </h4>
              )}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
