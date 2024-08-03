import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function Details() {

  const dispatch = useDispatch();
  const {id} = useParams();
  const movie = useSelector(store => store.movies);
  const movieDetail = useSelector (store => store.details);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, []);
// button return to home page
  const handleClick = () => {
    history.push('/');
  }

  return (
    <main>
      <h1>Details Page</h1>
      <button data-testid="toList" onClick={handleClick}> Return to Home</button>
      <section className="movies">
        {movie.map(movie => {
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
