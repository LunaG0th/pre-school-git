
import './Hero.css'

function Hero() {
  return (
    <section id='hero'>
      <div className="hero">
        <img src="../../hero02.png" alt="student" />
        <div className='hero__cta'>
          <p>sub-title</p>
          <h1>Business Name</h1>
          <button className='btn'>Learn More</button>
        </div>    
      </div>
    </section>
  );
}

export default Hero;
