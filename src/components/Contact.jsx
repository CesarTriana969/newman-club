import emailjs from "@emailjs/browser"
import communication from "../assets/img/online-communication.png";
import "./styles/contact.css";

const Contact = () => {

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
    <section className="section__contact grid--container" id="contact">
      <form className="form" onSubmit={handleSubmit} >
        <div className="form__content">
          <h2 className="form__title">
            <span>Join&nbsp;</span><span className="second__word-title">us.</span>
          </h2>

          <p className="form__description">in the sea of life, there is nothing to fear if you have God as your captain.Jain our crew!.</p>

          <div className="form__div">
            <input className="form__input" placeholder="Full Name" type="text" name="name" />
          </div>
          <div className="form__div">
            <input className="form__input" placeholder="Email Address" type="text" name="email" />
          </div>
          <div className="form__div">
            <input className="form__input" placeholder="Cell Phone Number" type="text" name="phone" />
          </div>

          <div className="form__div">
            <textarea className="form__input message" placeholder="Message" name="message" id="" cols="30" rows="10"></textarea>
          </div>

          <button className="form__btn">SEND</button>
        </div>
        <div className="form__image-container">
          <img className="form__image form__image--1" src={communication} alt="" loading="lazy" />
          <span className="label__image-form"></span>
        </div>
      </form>
    </section>
  )
}

export default Contact