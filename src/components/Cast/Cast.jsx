import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastContainer, CastCard, CastImage, CastInfo } from './Cast.styled';
import API from 'service/fetchApi';

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await API.getMovieCast(id);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
    <CastContainer>
      {movieCast.map(cast => (
        <CastCard key={cast.id}>
          <CastImage
            src={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
            alt={cast.original_name}
          />

          <CastInfo>
            <h4>{cast.name}</h4>
            <p>Character : {cast.character}</p>
          </CastInfo>
        </CastCard>
      ))}
    </CastContainer>
  );
};

export default Cast;
