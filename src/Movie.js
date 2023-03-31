import React from "react";

const Movie = ({ poster_path, title, overview, genre_names }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <img src={`${IMG_URL}${poster_path}`} alt={`${title} poster`} />
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>Genres: {genre_names}</p>
    </div>
  );
};

export default Movie;
