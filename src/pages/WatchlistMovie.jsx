import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../components/MovieItem/MovieItem";

const WatchlistMovie = () => {
  // const watchlistMovie = useSelector((state) => state.watchlist.watchlist);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white m-3">
        Your Watchlist Movie
      </h1>
      <div className="flex flex-wrap justify-center gap-3 p-5">
        {/* {watchlistMovie.length < 1 ? (
          <div className="w-full my-48">
            <h1 className="text-3xl text-gray-600 text-center font-semibold">
              No watchlist movies
            </h1>
          </div>
        ) : (
          watchlistMovie.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        )} */}
      </div>
    </div>
  );
};

export default WatchlistMovie;
