import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genres: [],
  searchValue: "",
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setGenres: (state, action) => {
      state.genres = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setSearchValue, setLoading, setError, setGenres } =
  movieSlice.actions;

export default movieSlice.reducer;
