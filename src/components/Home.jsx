import { useEffect } from "react";
import video from "../assets/img/Final2.mp4";
import logo_home from "../assets/img/Grupo 971.svg"
import heart from "../assets/img/heart.svg"
import heart_persons from "../assets/img/threePersons.svg"
import message_text from "../assets/img/comment_FILL0_wght400_GRAD0_opsz48.svg"
import "./styles/home.css";

const Home = () => {
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const home = document.getElementById("home");
    home.style.height = `${screenHeight}px`;
  }, []);

  return (
    <section className="home" id="home">
      <video className="video" src={video} autoPlay muted loop />

      <div className="logo_home-container">
        <img className="logo_home" src={logo_home} alt="" loading="lazy" />
      </div>

      <div className="home__btn-container">
        <a className="home-button">

          <div className="gallery__icons">
            <img className="logo_home-buttom" src={heart} alt="" loading="lazy" />

            <img className="logo_home-buttom" src={heart_persons} alt="" loading="lazy" />
          </div>
          <h1 className="home-btn">JOIN US</h1>
        </a>
      </div>

      <div className="message__text">
        <img className="logo_home" src={message_text} alt="" loading="lazy" />
      </div>

    </section>
  );
};

export default Home;
