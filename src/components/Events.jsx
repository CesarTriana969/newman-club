// import { useState } from "react";
import { useState } from "react";
import event1 from "../assets/img/event1.jpg";
import event2 from "../assets/img/event2.jpg";
import event3 from "../assets/img/event3.jpg";
import event4 from "../assets/img/event4.jpg";
import icon_events from "../assets/img/Grupo 54.svg";
import "./styles/events.css";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }


  return (
    <section className="section__events grid--container" id="events">

      <div className="title__events-container">
        <img className="icon__title-events" src={icon_events} alt="" loading="lazy" />
        <h1 className="title__events">Events</h1>
      </div>

      <div className="gallery">
        <div className="item">
          <div className="overlay">
            <div className="content__overlay">
              <h2>event 1</h2>
              <div className="line"></div>
              <div className="date" onClick={handleOpenModal}>
                <p>12</p>
                <p>june</p>
              </div>
            </div>
          </div>
          <div className="item__img">
            <img src={event1} alt="" loading="lazy" />
          </div>
          <div
            className={`info__event-modal ${isModalOpen ? "open" : ""}`}
            onClick={handleCloseModal}
          >
            <div className="event__info-info">
              <div className="container__modal-info">

                <img src={event1} alt="" loading="lazy" />
                <h2 className="date__info-event"><span>12</span> <span>&nbsp;june</span></h2>
                <div className="event__details">

                  <h3 className="event__title-info">EVENT 1</h3>
                  <div className="event__title-date">
                    <p className="event__date-info">Friday 3 june 2022</p>
                    <p className="event__hour-info">20:00</p>
                    <p className="event__place-info">Movistar Arena</p>
                  </div>

                  <p className="event__description-info">Uno de los artistas más esperados en Colombia por primera vez en concierto, Louis Tomlinson, ex integrante de One Direction, llegará por primera vez a Bogotá para presentar su primer trabajo como solista.<br />Louis Tomlinson, se presentará en el Movistar Arena en Bogotá el viernes 3 de junio de 2022 presentando su álbum como solista 'Walls' y sus grandes éxitos que lo han consolidado como uno de los grandes artistas del momento.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="item">
          <div className="overlay">
            <div className="content__overlay">
              <h2>event 1</h2>
              <div className="line"></div>
              <div className="date">
                <p>12</p>
                <p>june</p>
              </div>
            </div>
          </div>
          <div className="item__img">
            <img src={event2} alt="" loading="lazy" />
          </div>
        </div>
        <div className="item">
          <div className="overlay">
            <div className="content__overlay">
              <h2>event 1</h2>
              <div className="line"></div>
              <div className="date">
                <p>12</p>
                <p>june</p>
              </div>
            </div>
          </div>
          <div className="item__img">
            <img src={event3} alt="" loading="lazy" />
          </div>
        </div>
        <div className="item">
          <div className="overlay">
            <div className="content__overlay">
              <h2>event 1</h2>
              <div className="line"></div>
              <div className="date">
                <p>12</p>
                <p>june</p>
              </div>
            </div>
          </div>
          <div className="item__img">
            <img src={event4} alt="" loading="lazy" />
          </div>

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
      <div className="line__events"></div>
    </section>
  )
}

export default Events





