import axios from "axios";
import { createContext, useState } from "react";

export const APIMovieContext = createContext();
// testing api functions requirements
const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const urlOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjc5NzlmNmUwYmNhZWFiZjMzYmZkZTJlMWRmYzRjNyIsInN1YiI6IjY1MmY5OWJkY2FlZjJkMDBmZjU0MjljZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FesG3-h013sEgTjKHPqjQu7UgVfyPUfnMoJ9hhK6vuQ",
  },
};
// -----------------------------------------------------
// eslint-disable-next-line react/prop-types
export function APIMovieProvider({ children }) {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [shows, setShows] = useState([]);

  const fetchTesting = async () => {
    try {
      const response = await axios.get(url, urlOptions);
      setMovieData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching latest movies:", error);
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchTesting();
  // }, []);
  return (
    <APIMovieContext.Provider value={{ movieData, fetchTesting }}>
      <div>
        {isLoading ? <h2>Loading movies...</h2> : <h2>movies is now loaded</h2>}
      </div>
      {children}
    </APIMovieContext.Provider>
  );
}

/*
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
 */

// const testApi = async () => {
//   try {
//     const response = await axios.get("https://api.example.com/movies/latest");
//     console.log("svar: ", response);
//   } catch (error) {
//     console.error("Error fetching latest movies:", error);
//   }
// };
