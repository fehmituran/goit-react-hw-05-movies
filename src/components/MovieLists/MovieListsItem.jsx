import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Item, Image, Title } from './MovieLists.styled';
import { Link, useLocation } from 'react-router-dom';

const MovieListsItem = ({ id, title, url }) => {
  const location = useLocation();
 
  return (
    <ListItem>
      <Link to={`/movies/${id}`} state={{from: location}}>
      <Item>
        <Image src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />
        <Title>
          <h3>{title}</h3>
        </Title>
      </Item>
      </Link>
    </ListItem>
  );
};

export default MovieListsItem;


MovieListsItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
