import { useState } from "react";
import { tempMovieData, tempWatchedData, average } from "./App";
import MovieList from "./ResultsMovieList";
import WatchedMovieList from "./WatchedMovieList";

export function Main() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);




  return (
  <main className="main">
    {/* Movies Loaded (Left Box) */}
    <MovieList movies={movies}/>
    {/* Watched Movies (Right Box) */}
    <WatchedMovieList movies={movies} watched={watched}/>
  </main>
  )
}
