import React from "react";
import classes from "./MoviePrevCast.module.scss";

const MoviePrev = ({
  overview,
  name,
  release_date,
  vote_average,
  poster_path,
  title,
  original_title,
  genres,
}) => (
  <>
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
      </div>
      <div>
        <h1>
          {name || title || original_title} ({parseInt(release_date)})
        </h1>
        <p style={{ fontSize: "26px" }}>
          User source: {parseFloat(vote_average) * 10}%{" "}
        </p>
        <h1>Overview</h1>
        <p style={{ fontSize: "26px" }}>{overview}</p>
        <h2>Genres</h2>
        <ul style={{ fontSize: "20px" }} className="MoviePreviewList">
          {genres.map((genre) => (
            <li key={genre.id}> {genre.name} </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);
export default MoviePrev;
