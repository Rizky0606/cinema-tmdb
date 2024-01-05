import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import convertGetYear from "../utils/convertGetYear";
import MovieItem from "../components/MovieItem/MovieItem";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { addOrRemoveFavorite } from "../redux/slices/favoriteSlice";
import { addOrRemoveWatchlist } from "../redux/slices/watchlistSlice";

const DetailMovie = () => {
  const [detailMovie, setDetailMovie] = useState([]);
  const [recommendationMovies, setRecommendationMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const favoriteMovie = useSelector((state) => state.favorite.favorite);
  const watchlistMovie = useSelector((state) => state.watchlist.watchlist);

  const handleGetDetailMovie = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzE3YzZmYzdlM2JjOGUzZmQzZmRjZGZkNTU0NTUyYiIsInN1YiI6IjYyM2FhZjRiMjExY2U1MDA0Nzg0ZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9alb1DcRnWoBh0xEkBmMDau5ZlKdsl4gEGYb7lPzOhY",
        },
      };

      const response = await axios.get(url, options);
      setDetailMovie(response.data);
      setIsLoading(false);
      //   console.log(response.data.genres.length);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetRecomendationMovie = async () => {
    try {
      const url =
        "https://api.themoviedb.org/4/account/623aaf4b211ce5004784eea0/movie/recommendations?page=1&language=en-US";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzE3YzZmYzdlM2JjOGUzZmQzZmRjZGZkNTU0NTUyYiIsInN1YiI6IjYyM2FhZjRiMjExY2U1MDA0Nzg0ZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9alb1DcRnWoBh0xEkBmMDau5ZlKdsl4gEGYb7lPzOhY",
        },
      };

      const response = await axios.get(url, options);
      setRecommendationMovies(response.data.results.slice(0, 10));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickFavoriteMovie = (e) => {
    e.preventDefault();
    dispatch(
      addOrRemoveFavorite({
        id: detailMovie.id,
        original_title: detailMovie.original_title,
        poster_path: detailMovie.poster_path,
        release_date: detailMovie.release_date,
      })
    );
  };

  const handleClickWatclistMovie = (e) => {
    e.preventDefault();
    dispatch(
      addOrRemoveWatchlist({
        id: detailMovie.id,
        original_title: detailMovie.original_title,
        poster_path: detailMovie.poster_path,
        release_date: detailMovie.release_date,
      })
    );
  };

  useEffect(() => {
    handleGetDetailMovie();
    handleGetRecomendationMovie();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full h-72">
            <img
              src={`https://image.tmdb.org/t/p/w780/${detailMovie.backdrop_path}`}
              className="w-full h-72 object-cover brightness-50 absolute"
              alt={detailMovie.original_title}
            />
            <div className="relative flex items-center">
              <div className="p-10 flex flex-row">
                <img
                  src={`https://image.tmdb.org/t/p/w780/${detailMovie.poster_path}`}
                  className="w-32 h-52 object-cover rounded-md"
                  alt={detailMovie.original_title}
                />
                <div className="mx-3 hidden sm:flex sm:flex-col">
                  <div className="flex flex-row">
                    <h1 className="text-md font-bold text-white">
                      {detailMovie.original_title}
                    </h1>
                    <p className="text-md text-white mx-2">
                      ({convertGetYear(new Date(detailMovie.release_date))})
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-sm">
                      {detailMovie.release_date}
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Overview</p>
                    <p className="text-white text-sm text-justify">
                      {detailMovie.overview}
                    </p>
                  </div>
                  <div className="flex flex-row my-5">
                    <div
                      className=" block hover:block"
                      onClick={handleClickFavoriteMovie}
                    >
                      {favoriteMovie.some(
                        (item) => item.id === detailMovie.id
                      ) ? (
                        <IoIosHeart className=" text-white text-[23px]" />
                      ) : (
                        <FaRegHeart className="text-white text-[23px]" />
                      )}
                    </div>

                    <div
                      className=" block hover:block ml-3"
                      onClick={handleClickWatclistMovie}
                    >
                      {watchlistMovie.some(
                        (item) => item.id === detailMovie.id
                      ) ? (
                        <IoBookmark className=" text-white text-[23px]" />
                      ) : (
                        <CiBookmark className="text-white text-[23px]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-3 sm:hidden">
            <div className="flex flex-row">
              <h1 className="text-md font-bold text-white">
                {detailMovie.original_title}
              </h1>
              <p className="text-md text-white mx-2">
                ({convertGetYear(new Date(detailMovie.release_date))})
              </p>
            </div>
            <div>
              <p className="text-white text-sm">{detailMovie.release_date}</p>
            </div>
            <div>
              <p className="text-white font-bold">Overview</p>
              <p className="text-white text-sm text-justify">
                {detailMovie.overview}
              </p>
            </div>
            <div className="flex flex-row my-5">
              <div
                className=" block hover:block"
                onClick={handleClickFavoriteMovie}
              >
                {favoriteMovie.some((item) => item.id === detailMovie.id) ? (
                  <IoIosHeart className=" text-white text-[23px]" />
                ) : (
                  <FaRegHeart className="text-white text-[23px]" />
                )}
              </div>

              <div
                className=" block hover:block ml-3"
                onClick={handleClickWatclistMovie}
              >
                {watchlistMovie.some((item) => item.id === detailMovie.id) ? (
                  <IoBookmark className=" text-white text-[23px]" />
                ) : (
                  <CiBookmark className="text-white text-[23px]" />
                )}
              </div>
            </div>
          </div>

          {/* Section Recomendation Movies*/}
          <div>
            <h1 className="text-xl font-bold text-white p-5">Recomendation</h1>
            <div className="flex flex-wrap justify-center gap-4">
              {recommendationMovies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMovie;
