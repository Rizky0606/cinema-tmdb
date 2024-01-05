import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieItem from "../components/MovieItem/MovieItem";

const SearchMovie = () => {
  const [searchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query");
  const [dataMovies, setDataMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleGetSearchMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzE3YzZmYzdlM2JjOGUzZmQzZmRjZGZkNTU0NTUyYiIsInN1YiI6IjYyM2FhZjRiMjExY2U1MDA0Nzg0ZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9alb1DcRnWoBh0xEkBmMDau5ZlKdsl4gEGYb7lPzOhY",
      },
    };

    const response = await axios.get(url, options);
    setDataMovies(response.data.results);
    setIsLoading(false);
  };

  console.log(dataMovies);
  useEffect(() => {
    handleGetSearchMovie();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center py-5">
          {dataMovies.map((movie, index) => (
            <MovieItem key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
