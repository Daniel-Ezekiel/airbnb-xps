import star from '../assets/star.png';

const Card = ({ tag, img, rating, reviewCount, location, title, price }) => {
  return (
    <div className="experiences--card">
      <span className="card--tag">{tag}</span>

      <img src={`${img}`} alt="experience-image" className="card--image" />

      <p className="card--rating">
        <span>
          <img src={star} alt="star" /> {rating}{' '}
        </span>
        ({reviewCount}) • {location}
      </p>
      <h3 className="card--title">{title}</h3>
      <span className="card--pricing">
        <strong>From ${price}</strong> / person
      </span>
    </div>
  );
};

export default Card;
