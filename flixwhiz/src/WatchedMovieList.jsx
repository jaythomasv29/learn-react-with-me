import { useState } from "react"
import { average } from "./App"
import WatchedSummary from "./WatchedSummary";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);


  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />

          <ul className="list">
            {watched.map((movie) => (
              <WatchedMovie key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}