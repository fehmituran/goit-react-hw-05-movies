import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsContainer, ReviewsCard, NoReviews } from './Reviews.styled';
import API from 'service/fetchApi';

const Reviews = () => {
  const { id } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await API.getMovieReviews(id);

        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <ReviewsContainer>
      {movieReviews.length > 0 ? (
        movieReviews.map(reviews => (
          <ReviewsCard key={reviews.id}>
            <h3>Author: {reviews.author}</h3>
            <p>{reviews.content}</p>
          </ReviewsCard>
        ))
      ) : (
        <NoReviews> We don`t have any review for this movie </NoReviews>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
