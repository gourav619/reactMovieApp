import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import searchSvg from "./assets/search.svg";

const API_URL = "http://www.omdbapi.com/?&apikey=743fd6a8";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    fetchMovies(searchTerm);
  },[searchTerm]);

  const fetchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}&plot=full`);
      const data = await response.json();
      if (data.length != 0) setMovies(data.Search);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app">
      <h1>MovieFlex</h1>
      <div className="search">
        <input
          placeholder="search a movie"
          value={searchTerm}
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={searchSvg} alt="search icon" onClick={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
