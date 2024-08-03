import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleClick = () => {
    history.push('/');
  }

  return (
    <main>
      <h1>Details Page</h1>
      <button data-testid="toList" onClick={handleClick}> Return to Home</button>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid="movieDetails" key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
      
    </main>
  );
}

export default Details;
