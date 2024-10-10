import './About.css';

function About() {
  return (
    <section id='about'>
      <div className='about container'>
        <div className='about__row'>
          <div className='about__left'>
            <div class='material-symbols-outlined play-icon'>play_circle</div>
          </div>
          <div className='about__right'>
            <p className='about__right-sub'>About sub-title</p>
            <h4>about the business type of industry</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, reprehenderit voluptate. Laboriosam atque est nemo
              officia accusantium! Vero{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
