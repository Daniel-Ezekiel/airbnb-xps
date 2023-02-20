import experienceImage from '../assets/katie-zaferes.png';
import star from '../assets/star.png';

const Card = () => {
  return (
    <div className="experiences--card">
      <span className="card--tag">Sold out</span>

      <img
        src={experienceImage}
        alt="experience-image"
        className="card--image"
      />

      <p className="card--rating">
        <span>
          <img src={star} alt="star" /> 5.0{' '}
        </span>
        (6) . USA
      </p>
      <h3 className="card--title">Life lessons with Katie Zaferes</h3>
      <span className="card--pricing">
        <strong>From $136</strong> / person
      </span>
    </div>
  );
};

export default Card;
