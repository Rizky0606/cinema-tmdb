import axios from "axios";
import React, { useEffect, useState } from "react";

import MovieItem from "../components/MovieItem/MovieItem";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetMovieNowPlaying = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzE3YzZmYzdlM2JjOGUzZmQzZmRjZGZkNTU0NTUyYiIsInN1YiI6IjYyM2FhZjRiMjExY2U1MDA0Nzg0ZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9alb1DcRnWoBh0xEkBmMDau5ZlKdsl4gEGYb7lPzOhY",
        },
      };
      const response = await axios.get(url, options);
      setMovies(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovieNowPlaying();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center py-5">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
