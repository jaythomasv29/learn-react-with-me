import { useState } from "react"
// import { average } from "./App"
import WatchedSummary from "./WatchedSummary";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ movies }) {
  return (

    <>
      <WatchedSummary movies={movies} />
      <ul className="list">
        {movies.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  )
}