import { useEffect, useState } from "react";
import axios from "axios";
import { ApiConfigs } from "../APIConfig/config";
import { useParams } from "react-router-dom";
import "../style/sharedByAll.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function DetailsMovieApi() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // getting API-Keys from config-file
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjc5NzlmNmUwYmNhZWFiZjMzYmZkZTJlMWRmYzRjNyIsInN1YiI6IjY1MmY5OWJkY2FlZjJkMDBmZjU0MjljZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FesG3-h013sEgTjKHPqjQu7UgVfyPUfnMoJ9hhK6vuQ",
    },
  };

  console.log("id är från details: ", id);

  useEffect(() => {
    setIsLoading(true);
    // Create an AbortController to cancel network requests when the component unmounts.
    const controller = new AbortController();

    async function fetchData() {
      try {
        const AllMovieResponse = await axios.get(url, options);

        setMovieData(AllMovieResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData(); // call fetchData
  }, []);
  console.log("deatils.data: ", movieData);
  return (
    <>
      <h1 className="topTitles">heeeeel</h1>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress className="loadingIcon" />
        </Box>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          className="imageSize"
        />
      )}
    </>
  );
}
