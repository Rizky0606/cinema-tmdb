import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchlist: [],
  },
  reducers: {
    addOrRemoveWatchlist: (state, action) => {
      const { id, original_title, poster_path, release_date } = action.payload;
      if (state.watchlist.some((movie) => movie.id === id)) {
        state.watchlist = state.watchlist.filter((movie) => movie.id !== id);
      } else {
        state.watchlist.push({ id, original_title, poster_path, release_date });
      }
    },
  },
});

export const { addOrRemoveWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
