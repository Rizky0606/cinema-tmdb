import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

import convertGetYear from "../../utils/convertGetYear";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFavorite } from "../../redux/slices/favoriteSlice";
import { addOrRemoveWatchlist } from "../../redux/slices/watchlistSlice";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const favoriteMovie = useSelector((state) => state.favorite.favorite);
  const watchlistMovie = useSelector((state) => state.watchlist.watchlist);

  const handleClickFavoriteMovie = (e) => {
    e.preventDefault();
    dispatch(
      addOrRemoveFavorite({
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      })
    );
  };

  const handleClickWatclistMovie = (e) => {
    e.preventDefault();
    dispatch(
      addOrRemoveWatchlist({
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      })
    );
  };

  return (
    <Link to={`/detail-movie/${movie.id}`}>
      <div className="card rounded-md bg-base-100 shadow-md w-36">
        <figure className=" hover:brightness-50">
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt="Album"
          />
        </figure>

        {/* Handle Favorite Movie */}
        {location.pathname === "/favorite" ? (
          <div
            className="absolute block hover:block"
            onClick={handleClickFavoriteMovie}
          >
            {favoriteMovie.some((item) => item.id === movie.id) ? (
              <IoIosHeart className=" text-white text-[23px]" />
            ) : (
              <FaRegHeart className="text-white text-[23px]" />
            )}
          </div>
        ) : location.pathname === "/watchlist" ? (
          <div
            className="absolute block hover:block"
            onClick={handleClickWatclistMovie}
          >
            {watchlistMovie.some((item) => item.id === movie.id) ? (
              <IoBookmark className=" text-white text-[23px]" />
            ) : (
              <CiBookmark className="text-white text-[23px]" />
            )}
          </div>
        ) : (
          <div className="absolute bottom-20 right-14 ">
            <div
              className="absolute block hover:block"
              onClick={handleClickFavoriteMovie}
            >
              {favoriteMovie.some((item) => item.id === movie.id) ? (
                <IoIosHeart className=" text-white text-[23px]" />
              ) : (
                <FaRegHeart className="text-white text-[23px]" />
              )}
            </div>

            <div
              className="absolute block hover:block ml-7"
              onClick={handleClickWatclistMovie}
            >
              {watchlistMovie.some((item) => item.id === movie.id) ? (
                <IoBookmark className=" text-white text-[23px]" />
              ) : (
                <CiBookmark className="text-white text-[23px]" />
              )}
            </div>
          </div>
        )}

        {/* Handle Watchlist Movie */}

        {/* Info Movie */}
        <div className="p-2 bg-neutral-700">
          <h2 className="text-sm font-semibold text-white">{`${movie.original_title.slice(
            0,
            15
          )}...`}</h2>
          <p className="text-[12px] text-white">
            {convertGetYear(new Date(movie.release_date))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
