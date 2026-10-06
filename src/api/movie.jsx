import axios from "axios";
import { setGenres, setMovies } from "../slice/movieSlice";

const API_KEY = import.meta.env.VITE_API_KEY;
const BaseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`;

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch(setMovies(data));
  } catch (err) {
    return err;
  }
};

export const getMoviesBySearch = () => async (dispatch) => {
  const url = BaseUrl + "/search  ";
  try {
    const data = await axios.get(url, {
      params: {
        search: value,
      },
    });
    dispatch(setMovies(data));
  } catch (err) {
    return err;
  }
};

export const getAllGenres = () => async (dispatch) => {
  const url = BaseUrl + "/genres  ";
  try {
    const { data } = await axios.get(url);
    dispatch(setGenres(data));
  } catch (err) {
    return err;
  }
};
