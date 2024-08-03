import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  // kx added- onclick on image to navigate to details page
  const handleClick = (id) => {
    history.push(`/details/${id}`);
  }; 
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" src={movie.poster} alt={movie.title} onClick={() => handleClick(movie.id)}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
