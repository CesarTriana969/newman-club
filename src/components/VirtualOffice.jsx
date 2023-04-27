import icon_events from "../assets/img/Grupo 54.svg";
import memory2 from "../assets/img/14322538_1245420755518990_4236770325307774581_n.png";
import memory1 from "../assets/img/21685935_1615511418509920_6491417614339878702_n.png";
import memory3 from "../assets/img/40808616_2018763951517996_2574844232665661440_n.png";
import memory4 from "../assets/img/40903460_2018764138184644_8462339609081151488_n.png";
import memory5 from "../assets/img/41099653_2018780958182962_8517396395416616960_n.png";
import memory6 from "../assets/img/ot9bKhYEOxhuVEsa6si4svj2bDonTlaOsOaIAeOF.png";
import man from "../assets/img/man.png";
import music2 from "../assets/img/musicList.png";
import "./styles/virtualOffice.css";


const VirtualOffice = () => {
  return (
    <section className="virtualOffice__section" id="virtual-office">
      <div className="line__virtualOffice"></div>
      <div className="section__virtualOffice grid--container">

        <div className="title__virtualOffice-container">
          <img className="icon__title-virtualOffice" src={icon_events} alt="" loading="lazy" />
          <h1 className="title__virtualOffice">Memories</h1>

          <div className="virtualOffice__images-container">

            <div className="virtualOffice__image memory1">
              <img src={memory1} alt="" loading="lazy" />
            </div>
            <div className="virtualOffice__image memory2">
              <img src={memory2} alt="" loading="lazy" />
            </div>
            <div className="virtualOffice__image memory3">
              <img src={memory3} alt="" loading="lazy" />
            </div>
            <div className="virtualOffice__image memory4">
              <img src={memory4} alt="" loading="lazy" />
            </div>
            <div className="virtualOffice__image memory5">
              <img src={memory5} alt="" loading="lazy" />
            </div>
            <div className="virtualOffice__image memory6">
              <img src={memory6} alt="" loading="lazy" />
            </div>

            <button className="virtualOffice__btn">MORE MEMORIES</button>

          </div>
        </div>
      </div>

      <div className="virtualOffice__music-images--container">
        <div className="background__music"></div>
        <h1></h1>
        <div className="container__playlist">

        </div>
        <div className="virtualOffice__music-images-man">
          <img src={man} alt="" loading="lazy" />
          <h1 className="virtualOffice__music-title"><span className="first__word-music">Newman</span> Soundtrack</h1>
        </div>
        <div className="virtualOffice__music-images-playlist">
          <img src={music2} alt="" loading="lazy" />
        </div>
      </div>

    </section>
  )
}

export default VirtualOffice