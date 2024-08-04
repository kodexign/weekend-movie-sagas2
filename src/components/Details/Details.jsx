import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './Details.css';

function Details() {

  const dispatch = useDispatch();
  const {id} = useParams();
  const movie = useSelector(store => store.movies);
  const details = useSelector (store => store.details);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, [id, dispatch]);
// button return to home page
  const handleClick = () => {
    history.push('/');
  }

  return (
    <main>
      <h1>Details Page</h1>
      <button data-testid="toList" onClick={handleClick}> Return to Home</button>
      <section className="movies">
        {details.map(movie=> {
          return (
            <div className="detailspage" data-testid="movieDetails" key={movie.id}>
              
              <h3 className='dHeader'>{movie.title}</h3>
              
              <div className='dImage'>
              <img src={movie.poster} alt={movie.title}/>
              </div>

              <div className='mdetails'>
              <h4>Genre</h4>
              <p>{movie.genres}</p>
              <h4>Description</h4>
                <p>{movie.description}</p>
            </div>
            </div>
          );
        })}
      </section>
      
    </main>
  );
}

export default Details;
