import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ImageHandler({ movieData, isMovie }) {
  return (
    <>
      <div className="imageHandler">
        <div className="imageGrid">
          <div className="images">
            {/* // eslint-disable-next-line react/prop-types */},
            {/* eslint-disable-next-line react/prop-types */}
            {movieData.map((movie) => (
              <Link
                to={
                  isMovie
                    ? `/details/movie/${movie.id}`
                    : `/details/show/${movie.id}`
                }
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="imageSize"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
