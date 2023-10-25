import { Container } from "@mui/system";
import Navbar from "../shared/navbar";
import "../style/sharedByAll.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";
import { OnTheAirTodayShowsApi } from "../APITvShows/onTheAirTodayShowsApi";
import { TopRatedShowsApi } from "../APITvShows/topRatedShowsApi";
import { ApiAllShows } from "../APITvShows/apiAllShows";
import { PopularShowsApi } from "../APITvShows/popularShowsApi";

export default function Shows() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName + " - Shows";

  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------
  return (
    <>
      <Navbar currentPage="Shows" />
      <Container maxWidth="m">
        <br />

        <div>
          <h2 className="mainTextColor">On The Air Today</h2>
          <OnTheAirTodayShowsApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="mainTextColor">Top Rated</h2>
          <TopRatedShowsApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="mainTextColor">Most Popular</h2>
          <PopularShowsApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="mainTextColor">Tv Shows</h2>
          <ApiAllShows />
          <br />
          <br />
        </div>
      </Container>
    </>
  );
}
