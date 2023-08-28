import React, { useEffect, useState } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import API from 'service/fetchApi';
import MovieLists from 'components/MovieLists/MovieLists';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const movieQuery = searchParams.get('searchQuery') ?? '';

  // to wait for loading process
  const delay = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

  useEffect(() => {
    if (!movieQuery) return;

    const fetchMovies = async () => {
      try {
        setIsloading(true);
        const movies = await API.getSearchedMovies(movieQuery);
       delay(2);
        setListMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false)
      }
    };

    fetchMovies();
  }, [movieQuery]);

  const handleOnSubmit = searchQuery => {
    const nextParams = searchQuery !== '' ? { searchQuery } : {};
    setSearchParams(nextParams);
  };

  console.log(searchParams);
  return (
    <div>
      <SearchBox onSubmit={handleOnSubmit} />
      {isLoading && <Loader />}
      {listMovies.length > 0 && !isLoading && (
        <MovieLists movies={listMovies} />
      )}
    </div>
  );
};

export default Movies;
