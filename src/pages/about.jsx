import { Container } from "@mui/system";
import Navbar from "../shared/navbar";
import "../style/sharedByAll.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";

export default function About() {
  // takes the official Application-name then  set the document-title to a suitable name for the current page using Context()
  const appName = useContext(AppContext);

  const documentTitle = appName + " - About";

  useEffect(() => {
    document.title = documentTitle;
  });
  //---------------------------------------------------

  return (
    <>
      <Navbar currentPage="About" />
      <Container maxWidth="m">
        <h2 className="mainTextColor">about-Page</h2>
      </Container>
    </>
  );
}
