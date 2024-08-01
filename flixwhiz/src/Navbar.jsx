import { useState } from "react";

export default function Navbar() {

  const [movies, setMovies] = useState([]);

  return (<nav className="nav-bar">
    <Logo />
    <Search />
    <NumResults />
  </nav>)
}

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>FLIXR</h1>
    </div>
  )
}

function NumResults() {
  return (
    <p className="num-results">
      Found <strong>{[].length}</strong> results
    </p>
  )
}