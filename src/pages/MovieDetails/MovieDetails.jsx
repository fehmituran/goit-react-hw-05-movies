import BackLink from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import API from 'service/fetchApi';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
// to wait for loading process
const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsloading(true)
        const movies = await API.getMovieDetails(id);
        await delay(2);
        setMovieInfo(movies);
       
       

        
      } catch (error) {
        console.log(error);
      } finally {
        
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      {isLoading && <Loader/>}
     {movieInfo && <MovieCard movies={movieInfo} />}
    </main>
  );
};

export default MovieDetails;
