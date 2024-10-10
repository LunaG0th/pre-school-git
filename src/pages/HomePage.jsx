
import About from '../component/About/About';
import Contact from '../component/Contact/Contact';
import Gallery from '../component/Gallery/Gallery';
import Hero from '../component/Hero/Hero';
import Repeater from '../component/Repeater/Repeater';
import Testimonials from '../component/Testimonials/Testimonials';


function Home() {
  return (
    <main>
      <Hero/>
      <Repeater />
      <About />
      <Gallery/>
      <Testimonials/>
      <Contact />
    </main>
  );
}

export default Home;
