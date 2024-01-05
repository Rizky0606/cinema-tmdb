import { createSlice } from "@reduxjs/toolkit";

const favoriteSlices = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    addOrRemoveFavorite: (state, action) => {
      const { id, original_title, poster_path, release_date } = action.payload;
      if (state.favorite.some((movie) => movie.id === id)) {
        state.favorite = state.favorite.filter((movie) => movie.id !== id);
      } else {
        state.favorite.push({ id, original_title, poster_path, release_date });
      }
    },
  },
});

export const { addOrRemoveFavorite } = favoriteSlices.actions;
export default favoriteSlices.reducer;
