import React, { useState , useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import PlayIcon from "../../assets/play_icon.png";
import InfoIcon from "../../assets/info_icon.png";
import Card from "../../components/Cards/Card";
import Footer from "../../components/Footer/Footer";
const Home = () => {

  const [movieTrending , setMovieTrending] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmJiMjBmYmJhM2FlMjQyZWUzMDcwNjI0OWJlNjkzMCIsInN1YiI6IjY2M2Y1MDc2ZThlMjYwODUxYWI2MGQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmfZefPQY9-IZI3Rm98nvDdsdZSL5jCQZWf7N3hK8QI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        const randomIndex = Math.floor(Math.random() * response.results.length);
        setMovieTrending(response.results[randomIndex]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={`https://image.tmdb.org/t/p/w500/`+movieTrending.backdrop_path} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <h2 className="movie-title">{movieTrending.original_title}</h2>
          <p>
           {movieTrending.overview}
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={PlayIcon} alt="Play Video" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={InfoIcon} alt="Info Video" />
              More Info
            </button>
          </div>
          <Card />
        </div>
      </div>
      <div className="more-cards">
        <Card title={"Blockbuster Movies"} category={"popular"} />
        <Card title={"Upcomming"} category={"upcoming"} />
        <Card title={"Top Pics for you"} category={"top_rated"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
