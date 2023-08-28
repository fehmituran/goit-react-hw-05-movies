import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
// import { RiArrowGoBackFill } from "react-icons/ri";

import { StyledLink, BackLinkCard } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <BackLinkCard>
      <StyledLink to={to}>
        <HiArrowLeft size="24" />

        {children}
      </StyledLink>
    </BackLinkCard>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};