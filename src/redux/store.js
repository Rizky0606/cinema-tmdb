import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import watchlistReducer from "./slices/watchlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  // reducer: {
  //   favorite: favoriteReducer,
  //   watchlist: watchlistReducer,
  // },
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
