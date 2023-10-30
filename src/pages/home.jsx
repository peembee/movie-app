import Navbar from "../shared/navbar";
import "../style/home.css";
import "../style/sharedByAll.css";
import { Container } from "@mui/system";
import { useContext, useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";
import { HomeTrendingApi } from "../APIHome/homeTrendingApi";
import { HomeTopRatedMoviesAPi } from "../APIHome/homeTopRatedMoviesAPi";
import { HomeTopRatedShowsApi } from "../APIHome/homeTopRatedShowsApi";
import { HomeLuckySpinApi } from "../APIHome/homeLuckySpinApi";

export default function Home() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName.appName + " - Home";

  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------
  return (
    <>
      <Navbar currentPage="Home" />
      <Container maxWidth="m">
        <br />

        <div>
          <h2 className="luckySpinTitel">Try Your Luck</h2>
          <HomeLuckySpinApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="topTitles">Trending</h2>
          <HomeTrendingApi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="topTitles">Top Rated Movies</h2>
          <HomeTopRatedMoviesAPi />
          <br />
          <br />
        </div>

        <div>
          <h2 className="mainTextColor">Top Rated Tv-Shows</h2>
          <HomeTopRatedShowsApi />
          <br />
          <br />
        </div>
      </Container>
    </>
  );
}
