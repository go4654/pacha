import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../scss/main.scss";

const Movie = ({ id, title, year, summary, genres, img, bgImg, detailBg }) => {
  console.log("asdf" + detailBg);
  return (
    <Link
      to={{
        pathname: "/detail",
        state: {
          title,
          year,
          summary,
          genres,
          img,
          detailBg,
        },
      }}
    >
      <div className="con">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{summary.slice(0, 30) + "..."}</p>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  img: propTypes.string.isRequired,
};

export default Movie;
