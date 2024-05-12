import React, { useEffect, useState } from 'react'
import './Video.css'
import BackIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Video = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [movieData , setMovieData] = useState({
    name: "",
    type: "",
    key: "",
    published_at: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmJiMjBmYmJhM2FlMjQyZWUzMDcwNjI0OWJlNjkzMCIsInN1YiI6IjY2M2Y1MDc2ZThlMjYwODUxYWI2MGQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmfZefPQY9-IZI3Rm98nvDdsdZSL5jCQZWf7N3hK8QI'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setMovieData(response.results[0]))
    .catch(err => console.error(err));
  },[]);

  return (
    <div className='video'>
      <img src={BackIcon} alt="Back icon" onClick={() => {navigate(-2)}} />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${movieData.key}`} 
      frameborder="0" title='trailer' allowFullScreen></iframe>
      <div className="video-info">
        <p>{movieData.name}</p>
        <p>{movieData.type}</p>
        <p>{movieData.published_at.slice(0,10)}</p>
      </div>
    </div>
  )
}

export default Video
