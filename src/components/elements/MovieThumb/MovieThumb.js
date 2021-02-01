import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";
const MovieThumb = ({ image, movieId, movieName, clickable }) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            movieName: `${movieName}`,
          }}
        >
          <img src={image} alt="moviethumb"></img>
        </Link>
      ) : (
        <img src={image} alt="moviethumb"></img>
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};
export default MovieThumb;
