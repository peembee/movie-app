import { useEffect, useState } from "react";
import { DetailsShowApi } from "../APIDetails/detailsShowApi";
import { DetailsMovieApi } from "../APIDetails/detailsMovieApi";
import { Link } from "react-router-dom";

export function HomeLuckySpinApi() {
  const [isSpinning, setSpinning] = useState(false);
  const [enterNewPage, setEnterNewPage] = useState(false);
  let randomValue = 0;
  const handleSpinClick = () => {
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
      setEnterNewPage(true);
    }, 3000);
  };

  useEffect(() => {
    if (!isSpinning) {
      PickRandom();
    }
  }, [isSpinning]);

  const PickRandom = () => {
    randomValue = Math.floor(Math.random() * 2) + 1;

    if (randomValue === 1) {
      console.log("if-satsen == 1: ", randomValue);
      // skicka en random film -- TEMPORÄR KOD api hämtning
    } else {
      console.log("if-satsen == 2: ", randomValue);
      //   skicka en random serie -- TEMPORÄR KOD api hämtning
    }
  };

  return (
    <div>
      {/* if enterNewPage = false, stay on this page */}
      {enterNewPage === false ? (
        <div className={`centerButton`}>
          <button
            className={
              isSpinning ? "luckySpinButton spinAnimation" : "luckySpinButton"
            }
            onClick={handleSpinClick}
            disabled={isSpinning}
          >
            {isSpinning ? (
              <p className="spinText">Spin</p>
            ) : (
              <p className="spinText">Spin</p>
            )}
          </button>
        </div>
      ) : (
        // if enterNewPage is true, go to the new page due to the random number
        // <Link
        //   to={
        //     randomValue === 1
        //       ? `/details/movie/${movie.id}`
        //       : `/details/show/${movie.id}`
        //   }
        // />
        <h1 className="mainTextColor">hello</h1>
      )}
    </div>
  );
}
