import React, { useState, useEffect } from 'react';

// Importing loader
import PacmanLoader from 'react-spinners/PacmanLoader';

import { Container } from './Loader.styled';

const Loader = () => {
  // Loading state
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Custom css for loader
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

 

  return (
    isloading && (
      // If page is still loading then splash screen
      <Container>
        <PacmanLoader
          color={'#fff'}
          isLoading={isloading}
          css={override}
          size={100}
        />
      </Container>
    )
  );
};

export default Loader;
