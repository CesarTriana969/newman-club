import { useEffect } from "react";
import video from "../assets/img/Final2.mp4";
import logo_home from "../assets/img/Grupo 971.svg"
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

    </section>
  );
};

export default Home;
