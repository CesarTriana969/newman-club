import dinner from "../assets/img/event3.jpg";
import church from "../assets/img/event4.jpg";
import twoPersons from "../assets/img/twoPersons.svg";
import threePersons from "../assets/img/threePersons.svg";
import smile from "../assets/img/smile.svg";
import "./styles/theCrew.css";

const TheCrew = () => {
  return (
    <section className="theCrew-container" id="the-crew">

      <div className="card">
        <div className="card__content">
          <h2 className="card__title">
            <span>The&nbsp;</span><span className="second__word-title">crew.</span>
          </h2>

          <p className="card__description">The Catholic community at Trinity participates in the sacramental life of the church and serves actively as a partner in community building and interreligious dialogue to promote understanding and tolerance on campus. <br /><br /> Roman Catholic Campus Ministry is sponsored by the Archdiocese of Hartford Campus Ministry Office and Trinity College´s Office of Spiritual and Religious Life. It brings a vitally important dimension to life at Trinity College.</p>
          <button className="card__button">LEARN MORE</button>
        </div>

        <div className="card__image-container">
          <img className="card__image card__image--1" src={dinner} alt="" loading="lazy" />
          <img className="card__image card__image--2" src={church} alt="" loading="lazy" />
        </div>

        <div className="card__icon-container">

          <div className="card__icon-info">
            <img className="card__icon-smile" src={smile} alt="" loading="lazy" />

            <h2 className="quantity">165</h2>
            <p className="description__icons">Happy freshman members</p>

          </div>

          <div className="card__icon-info">

            <img className="card__icon-twoPersons" src={twoPersons} alt="" loading="lazy" />

            <h2 className="quantity">13</h2>
            <p className="description__icons">Wise Senior <br /> members</p>

          </div>



          <div className="card__icon-info">
            <img className="card__icon-threePersons" src={threePersons} alt="" loading="lazy" />
            <h2 className="quantity">173</h2>
            <p className="description__icons-three">The whole crew</p>
          </div>

        </div>
        <div className="line__theCrew-container-bottom">
        <div className="line__theCrew"></div>
        </div>
        <div className="line__theCrew-container-top">
        <div className="line__theCrew"></div>
        </div>
      </div>

    </section>
  );
};

export default TheCrew;
