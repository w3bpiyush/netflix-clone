import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({title,category}) => {

  const [movieData , setMovieData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmJiMjBmYmJhM2FlMjQyZWUzMDcwNjI0OWJlNjkzMCIsInN1YiI6IjY2M2Y1MDc2ZThlMjYwODUxYWI2MGQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmfZefPQY9-IZI3Rm98nvDdsdZSL5jCQZWf7N3hK8QI'
    }
  };
  

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
    fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=2`, options)
    .then(response => response.json())
    .then(response => setMovieData(response.results))
    .catch(err => console.error(err));
  },[])


  

  return (
    <div className='cards-title'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
        {movieData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <div className="card-overlay"></div>
            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="movie image" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );  
}

export default Card
