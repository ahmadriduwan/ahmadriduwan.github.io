import '../components/home.scss';

export default function Home() {
  return (
    <section className="header">
      <div className="header-title">
        <h1 className="glow">
          <span style={{ '--i': 0, '--o': 1, '--u': 1 }}>Y</span>
          <span style={{ '--i': 1, '--o': 1, '--u': 1.5 }}>O</span>
          <span style={{ '--i': 2, '--o': 1, '--u': 1 }}>U'</span>
          <span style={{ '--i': 3, '--o': 1, '--u': 1.5 }}>R</span>
          <span style={{ '--i': 4, '--o': 1, '--u': 1 }}>E</span>
          <br />
          <br />
          <span style={{ '--i': 5, '--o': 1.2, '--u': 1 }}>A</span>
          <span style={{ '--i': 6, '--o': 1.2, '--u': 1.5 }}>W</span>
          <span style={{ '--i': 7, '--o': 1.2, '--u': 1 }}>E</span>
          <span style={{ '--i': 8, '--o': 1.2, '--u': 1.5 }}>S</span>
          <span style={{ '--i': 9, '--o': 1.2, '--u': 1 }}>O</span>
          <span style={{ '--i': 10, '--o': 1.2, '--u': 1.5 }}>M</span>
          <span style={{ '--i': 11, '--o': 1.2, '--u': 1 }}>E</span>
        </h1>{' '}
        <h1 className="glow-text">
          <span>Y</span>
          <span>O</span>
          <span>U'</span>
          <span>R</span>
          <span>E</span>
          <br />
          <br />
          <span>A</span>
          <span>W</span>
          <span>E</span>
          <span>S</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
        </h1>
      </div>
      <div className="test"></div>
    </section>
  );
}
