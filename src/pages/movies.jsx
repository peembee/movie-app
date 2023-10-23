import { Container } from "@mui/system";
import Navbar from "../shared/navbar";
import "../style/sharedByAll.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";

export default function Movies() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName + " - Movies";

  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------
  return (
    <>
      <Navbar currentPage="Movies" />
      <Container maxWidth="m">
        <h2 className="mainTextColor">moviepage</h2>
        <div>
          <br />

          <h2 className="mainTextColor">senast tillagda filmer</h2>
        </div>
        <br />
        <div>
          <h2 className="mainTextColor">top lista filmer</h2>
        </div>
        <br />
        <div>
          <h2 className="mainTextColor">filmer</h2>
        </div>
      </Container>
    </>
  );
}
