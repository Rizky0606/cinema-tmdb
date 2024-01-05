import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NowPlaying from "../pages/NowPlaying";
import TopRated from "../pages/TopRated";
import Navbar from "../components/Navbar/Navbar";
import DetailMovie from "../pages/DetailMovie";
import FavoriteMovie from "../pages/FavoriteMovie";
import WatchlistMovie from "../pages/WatchlistMovie";

const Router = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
        <Route path="/favorite" element={<FavoriteMovie />} />
        <Route path="/watchlist" element={<WatchlistMovie />} />
      </Routes>
    </Fragment>
  );
};

export default Router;
