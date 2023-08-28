import React from 'react';
import {
  MovieCardContainer,
  MovieCardDetail,
  MovieCardImage,
  Image,
  MovieCardInfo,
  AditionalInormation,
  InformationOption,
} from './MovieCard.styled';
import { Link, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movies }) => {
  const {
    title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
    original_title,
  } = { ...movies };

  const releaseDate = release_date ? release_date.slice(0, 4) : 'date unknown';

  return (
    <MovieCardContainer>
      <MovieCardDetail>
        <MovieCardImage>
          <Image
            width="250px"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </MovieCardImage>

        <MovieCardInfo>
          <h2>
            {original_title} ({releaseDate}){' '}
          </h2>
          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </MovieCardInfo>
      </MovieCardDetail>
      <AditionalInormation>
        <h3>Additional information</h3>
        <InformationOption>
          <div>
            <Link to="cast">Cast</Link>
          </div>
          <div>
            <Link to="reviews">Reviews</Link>
          </div>
        </InformationOption>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AditionalInormation>
    </MovieCardContainer>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movies: PropTypes.exact({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
