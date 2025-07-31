import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import MovieDetail from './containers/MovieDetail';
import NotFound from './components/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
