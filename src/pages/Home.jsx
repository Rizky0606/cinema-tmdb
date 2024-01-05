import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MovieItem from "../components/MovieItem/MovieItem";

const Home = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetMoviesNowPlaying = async () => {
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
      setMoviesNowPlaying(response.data.results.slice(0, 15));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleGetMoviesTopRated = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzE3YzZmYzdlM2JjOGUzZmQzZmRjZGZkNTU0NTUyYiIsInN1YiI6IjYyM2FhZjRiMjExY2U1MDA0Nzg0ZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9alb1DcRnWoBh0xEkBmMDau5ZlKdsl4gEGYb7lPzOhY",
        },
      };
      const response = await axios.get(url, options);
      setMoviesTopRated(response.data.results.slice(0, 15));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMoviesNowPlaying();
    handleGetMoviesTopRated();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-3xl font-bold text-white">Loading...</h1>
        </div>
      ) : (
        <div>
          {/* Section Now Playing*/}
          <div className="p-5">
            <div className="flex justify-between my-2 items-center mx-5">
              <h1 className="font-bold text-lg text-white">Now Playing</h1>
              <Link to="/now-playing">
                <h1 className="text-sm underline text-white">See All</h1>
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {moviesNowPlaying.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          </div>

          {/* Section Top Rated*/}
          <div className="p-5">
            <div className="flex justify-between my-2 items-center mx-5">
              <h1 className="font-bold text-lg text-white">Top Rated</h1>
              <Link to="/top-rated">
                <h1 className="text-sm underline text-white">See All</h1>
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 justify-center">
              {moviesTopRated.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
