import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem/MovieItem";

const FavoriteMovie = () => {
  const favoriteMovie = useSelector((state) => state.favorite.favorite);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white m-3">Your Favorite Movie</h1>
      <div className="flex flex-wrap justify-center gap-3 p-5">
        {favoriteMovie.length < 1 ? (
          <div className="w-full my-48">
            <h1 className="text-3xl text-gray-600 text-center font-semibold">
              No favorite movies
            </h1>
          </div>
        ) : (
          favoriteMovie.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoriteMovie;
