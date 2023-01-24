import '../components/aboutme.scss';
import profile from '../assets/Me.jpg';

export default function Aboutme() {
  return (
    <section className="header">
      <div className="about-container">
        <div className="about-title">
          <h1 className="about-glow">
            <span style={{ '--i': 0 }}>A</span>
            <span style={{ '--i': 1 }}>B</span>
            <span style={{ '--i': 2 }}>O</span>
            <span style={{ '--i': 3 }}>U</span>
            <span style={{ '--i': 4 }}>T</span>
            <span style={{ '--i': 5 }}>M</span>
            <span style={{ '--i': 6 }}>E</span>
          </h1>
          <h1 className="about-text">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span>M</span>
            <span>E</span>
          </h1>
        </div>
        <div className="desc-container">
          <p className="about-desc">
            Hi, I'm Ahmad Riduwan, and I'm a front-end developer. I started learning programming languages since 2015. I learned Java and made some small games. then Lately, I've found my passion in the world of web development and the
            beauty behind website building, and now I can build web with React Js and vue Js. I'm currently looking for a junior dev position to finally start my career and gain experience in professional circles to fulfill my dream of
            becoming a full-stack developer.
          </p>
        </div>
      </div>
      <div className="about-picture">
        <div className="picture">
          <img src={profile} />
        </div>
      </div>
    </section>
  );
}
