import React from "react";

function Movie({ poster_path, title, overview, genre_names, release_date }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const releaseYear = release_date.split("-")[0];

  return (
    <div>
      <img src={`${IMG_URL}${poster_path}`} alt={title} />
      <h2>
        {title} ({releaseYear})
      </h2>
      <p>{genre_names}</p>
      <p>{overview}</p>
    </div>
  );
}

export default Movie;
