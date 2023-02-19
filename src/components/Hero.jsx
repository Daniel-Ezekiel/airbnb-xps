import heroImg from '../assets/photo-grid.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--image">
        <img src={heroImg} alt="photo-grid" />
      </div>

      <div className="hero--textContent">
        <h1 className="hero--title">Online Experiences</h1>

        <p className="hero--description">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
