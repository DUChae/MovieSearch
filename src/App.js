import { useState, useEffect } from "react";
import Movie from "./Movie";

const KEY = "dff672db6eef3cfbdbea7e88887d0d25";
const API_URL = "https://api.themoviedb.org/3/";

function App() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState({ movies: true, genres: true });
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`${API_URL}movie/popular?api_key=${KEY}`)
    ).json();
    setMovies(json.results);
    setLoading((prev) => ({ ...prev, movies: false }));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getGenres = async () => {
    const json = await (
      await fetch(`${API_URL}genre/movie/list?api_key=${KEY}`)
    ).json();
    setGenres(json.genres);
    setLoading((prev) => ({ ...prev, genres: false }));
  };

  useEffect(() => {
    getGenres();
  }, []);

  const getGenreNames = (genreIds) => {
    return genreIds.map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.name : "";
    });
  };

  return (
    <div>
      {loading.movies || loading.genres ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genre_names={getGenreNames(movie.genre_ids)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
