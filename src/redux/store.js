import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import watchlistReducer from "./slices/watchlistSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
