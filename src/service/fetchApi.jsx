import axios from 'axios';
import API_KEY from './Api';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = API_KEY;

const getTrendingMovie = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${api_key}`);

  return response.data.results;
};

const getSearchedMovies = async movieQuery => {
  const response = await axios.get(
    `/search/movie?api_key=${api_key}&query=${movieQuery}`
  );

  return response.data.results;
};

const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${api_key}`);
  return response.data;
};

const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${api_key}`);
  return response.data.cast;
};

const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${api_key}`);
  console.log(response.data.results)
  return response.data.results;
};

const API = {
  getTrendingMovie,
  getSearchedMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

export default API;
