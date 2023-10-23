import { Container } from "@mui/system";
import Navbar from "../shared/navbar";
import "../style/sharedByAll.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";

export default function Shows() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName + " - Shows";

  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------
  return (
    <div>
      <Navbar currentPage="Shows" />
      <Container maxWidth="m">
        <h2 className="mainTextColor">ShowsPage</h2>
        <div>
          <br />

          <h2 className="mainTextColor">senast tillagda serier</h2>
        </div>

        <br />
        <div>
          <h2 className="mainTextColor">top lista series</h2>
        </div>
        <br />
        <div>
          <h2 className="mainTextColor">serier</h2>
        </div>
      </Container>
    </div>
  );
}
