import { useState } from "react";
import event1 from "../assets/img/event1.jpg";
import event2 from "../assets/img/event2.jpg";
import event3 from "../assets/img/event3.jpg";
import event4 from "../assets/img/event4.jpg";
import icon_events from "../assets/img/Grupo 54.svg";
import "./styles/events.css";

const Events = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };



  return (
    <section className="section__events grid--container" id="events">
      <div className="title__events-container">
        <img className="icon__title-events" src={icon_events} alt="" loading="lazy" />
        <h1 className="title__events">Events</h1>
      </div>

      <div className="events">
        <div className="event__images-container">

          <div className="event__image">
            <img src={event1} alt="" loading="lazy" />
            <div className="event__line"></div>

            <div className="items__events">
              <span className="event__number">EVENT 1</span>
              <h2 className="text__event" onClick={toggleInfo}><span className="number">12</span> <br /> <span className="text">JUNE</span></h2>
            </div>


            <div className={`modal__container ${showInfo ? "modal__show overlay" : "modal__hidden"}`}>

              {/* <button className="modal__close-btn" onClick={toggleInfo}>
                &times;
              </button> */}
              {/* <div className="info__event">
                <img src={event1} alt="" loading="lazy" />
                <div className="event__info">
                  <h3 className="event__title">EVENT 1</h3>
                  <p className="event__date">Friday 3 june 2022</p>
                  <p className="event__hour">20:00</p>
                  <p className="event__place">Movistar Arena</p>
                  <p className="event__description">lorem</p>
                </div>
              </div> */}
            </div>

          </div>

          <div className="event__image">
            <img src={event2} alt="" loading="lazy" />
            <div className="event__line"></div>
            <span className="event__number">EVENT 2</span>
            <h2 className="text__event"><span className="number">12</span> <br /> <span className="text">JUNE</span></h2>
          </div>

          <div className="event__image">
            <img src={event3} alt="" loading="lazy" />
            <div className="event__line"></div>
            <span className="event__number">EVENT 3</span>
            <h2 className="text__event"><span className="number">12</span> <br /> <span className="text">JUNE</span></h2>

          </div>

          <div className="event__image">
            <img src={event4} alt="" loading="lazy" />
            <div className="event__line"></div>
            <span className="event__number">EVENT 4</span>
            <h2 className="text__event"><span className="number">12</span> <br /> <span className="text">JUNE</span></h2>
          </div>
        </div>

        <div className="event__btn-container">
          <a className="event-button">
            <h1 className="event-btn">MORE EVENTS</h1>
          </a>

          <div className="invitation__message">
            <p>Let`s have fun, join us in our events. Find out more here</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Events
