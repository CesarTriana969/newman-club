import emailjs from "@emailjs/browser"
import icon_events from "../assets/img/Grupo 53.svg";
import effect__footer from "../assets/img/effectFooter.png";
import telephone from "../assets/img/Grupo 975.svg";
import email from "../assets/img/Grupo 974.svg";
import "./styles/footer.css";

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID


    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(res => console.log(res.text))
      .catch(err => console.log(err))
  }

  return (
    <section className="footer-container" id="the-crew">

      <div className="footer grid--container">
        <div className="effect__footer-container">
          <img className="effect__footer" src={effect__footer} alt="" loading="lazy" />
        </div>
        <div className="left-container">
          <img className="icon__title-footer" src={icon_events} alt="" loading="lazy" />
          <h3 className="title__footer">Follow us on our social networks and don't miss our latest news and events</h3>
        </div>

        <div className="middle-container">
          <div className="footer__telephone">
            <img className="icon__social-virtualOffice" src={telephone} alt="" loading="lazy" />
            <p>+57(322)3746739</p>
          </div>

          <div className="footer__email">
            <img className="icon__social-virtualOffice" src={email} alt="" loading="lazy" />
            <p>servicio@lurdes.co</p>
          </div>

          <ul className="footer__social-container">
            <li className="footer__social-item">
              <a className="footer__social-link instagram" href="" rel="nofollow noreferrer" target="_blank">
                <i className='bx bxl-instagram'></i>
              </a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link facebook" href="" rel="nofollow noreferrer" target="_blank">
                <i className='bx bxl-facebook'></i>
              </a>
            </li>
          </ul>
        </div>

        <form className="form__footer" onSubmit={handleSubmit} >
          <div className="form__footer-content">
            <h2 className="form__footer-title">suscribe to our newsletter!</h2>
            <div className="form__footer-div">
              <input className="form__footer-input" placeholder="Your Email" type="text" name="email" />
            </div>

            <button className="form__footer-btn">SEND</button>
          </div>
        </form>

        <div className="footer__bottom">
          <p>Term & Conditions | Privacy Policy</p>
          <p>@ Copyryright 2020-201 Ingenuity & Solutions LLC All Rights Reserved.</p>
        </div>

      </div>
    </section>
  )
}

export default Footer