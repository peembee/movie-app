import { useEffect, useState } from "react";
import axios from "axios";
import { ApiConfigs } from "../APIConfig/config";
import "../style/sharedByAll.css";
import ImageHandler from "../shared/ImageHandler";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function HomeTrendingApi() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // getting API-Keys from config-file
  const { url, options } = ApiConfigs.homeTrending;

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

        setMovieData(AllMovieResponse.data.results);
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
  }, []);

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress className="loadingIcon" />
        </Box>
      ) : (
        <ImageHandler movieData={movieData} />
      )}
    </>
  );
}
