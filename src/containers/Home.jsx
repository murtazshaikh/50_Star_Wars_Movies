import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/movieSlice';
import MovieTable from '../components/MovieTable';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const { data: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Star Wars Movies</h1>
      {status === 'loading' && <Loader />}
      {status === 'failed' && <div className="error-message">{error}</div>}
      {status === 'succeeded' && <MovieTable movies={movies} />}
    </div>
  );
};

export default Home;
