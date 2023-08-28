import React, {useEffect, useState } from 'react';
import API from '../../service/fetchApi';
import MovieLists from 'components/MovieLists/MovieLists';


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
 
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        
        const movies = await API.getTrendingMovie();
      
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        
      }
    };

    fetchTrendingMovies();
  }, []);

  const titlestyle = {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
    marginTop: '20px',
  };

  return (
    <main>
      
     
        {<h1 style={titlestyle}>Trending Today</h1>}
        {trendingMovies.length > 0 &&  <MovieLists movies={trendingMovies} />}
      

   
    </main>
  );
};

export default Home;
