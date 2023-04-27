import icon_events from "../assets/img/Grupo 54.svg";
import blog1 from "../assets/img/event1.jpg";
import blog2 from "../assets/img/event2.jpg";
import blog3 from "../assets/img/event3.jpg";
import blog4 from "../assets/img/event4.jpg";
import "./styles/whatsNew.css";


const WhatsNew = () => {
  return (
    <section className="whatsNew__section" id="what's-new">
      <div className="line__whatsNew"></div>
      <div className="section__whatsNew grid--container">
        <div className="title__whatsNew-container">
          <img className="icon__title-whatsNew" src={icon_events} alt="" loading="lazy" />
          <h1 className="title__whatsNew">What´s-new</h1>
          <p className="subtitle__whatsNew">Find out about the latest news about our club</p>
        </div>

        <div className="whatsNew__images-container">

          <div className="whatsNew__image">
            <img src={blog1} alt="" loading="lazy" />
            <div className="items__whatsNew">
              <h2 className="whatsNew__number-first">BLOG 1</h2>
              <p className="author__blog-first">Jane cloe</p>
              <p className="text__whatsNew">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, delectus, sapiente fuga temporibus sint rerum maxime iste debitis nostrum ea illo at iusto inventore unde aspernatur.</p>
              <span className="date__whatsNew"><span className="number__date">12 </span><br /> Aug <br /> 2016 </span>
              <button className="whatsNew__btn">SEE MORE</button>
            </div>
          </div>

          <div className="whatsNew__image">
            <img src={blog2} alt="" loading="lazy" />
            <div className="items__whatsNew">
              <h2 className="whatsNew__number">BLOG 2</h2>
              <p className="author__blog">Jane cloe</p>
              <span className="date__whatsNew"><span className="number__date">12 </span><br /> Aug <br /> 2016 </span>
            </div>
          </div>

          <div className="whatsNew__image">
            <img src={blog3} alt="" loading="lazy" />
            <div className="items__whatsNew">
              <h2 className="whatsNew__number">BLOG 3</h2>
              <p className="author__blog">Jane cloe</p>
              <span className="date__whatsNew"><span className="number__date">12 </span><br /> Aug <br /> 2016 </span>
            </div>
          </div>

          <div className="whatsNew__image">
            <img src={blog4} alt="" loading="lazy" />
            <div className="items__whatsNew">
              <h2 className="whatsNew__number">BLOG 4</h2>
              <p className="author__blog">Jane cloe</p>
              <span className="date__whatsNew"><span className="number__date">12 </span><br /> Aug <br /> 2016 </span>
            </div>
          </div>

        </div>

        <div className="whatsNew__btn-container">
          <a className="whatsNew-button">
            <h1 className="whatsNew-btn">FIND OUT MORE</h1>
          </a>
        </div>
        <div className="line"></div>
      </div>


    </section>
  )
}

export default WhatsNew