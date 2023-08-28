import React from 'react';
import MovieListsItem from './MovieListsItem';
import { MovieList } from './MovieLists.styled';

const MovieLists = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <MovieListsItem key={id} id={id} title={title} url={backdrop_path} />
        );
      })}
    </MovieList>
  );
};
export default MovieLists;
