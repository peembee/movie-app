import Navbar from "../shared/navbar";
import "../style/home.css";
import "../style/sharedByAll.css";
import { Container } from "@mui/system";
import { useContext, useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";
import { APIMovieContext } from "../shared/apiHandlerMovieContext";
import { APIShowContext } from "../shared/apiHandlerShowContext";

export default function Home() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName + " - Home";

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  //---------------------------------------------------
  //
  // assign variable from the movieAPI
  // --> try to use the imported movieAPI-function
  const { movieData, fetchTesting } = useContext(APIMovieContext);

  useEffect(() => {
    fetchTesting();
    console.log("testData from MOVIE(fetchMetod): ", movieData);
  }, []);

  useEffect(() => {
    console.log("TestData from MOVIE: ", movieData);
  }, [movieData]);
  //---------------------------------------------------
  // assign variable from the showAPI
  // --> try to use the imported movieAPI-function
  const { showData, fetchShowTesting } = useContext(APIShowContext);

  useEffect(() => {
    fetchShowTesting();
    console.log("testData from SHOW(fetchShowTesting): ", showData);
  }, []);

  useEffect(() => {
    console.log("testData from SHOW: ", showData);
  }, [showData]);
  //---------------------------------------------------

  return (
    <>
      <Navbar currentPage="Home" />
      <Container maxWidth="m">
        <h2 className="mainTextColor">home-Page</h2>
        <div>
          <br />
          <h2 className="mainTextColor">
            lucky spin (visa en random film/serie på api)
          </h2>
          <br />
          <h2 className="mainTextColor">
            senast tillagda (serier samt filmer))
          </h2>
        </div>
        <br />
        <div>
          <h2 className="mainTextColor">top lista filmer</h2>
        </div>
        <br />
        <div>
          <h2 className="mainTextColor">top lista series</h2>
        </div>
      </Container>
    </>
  );
}
