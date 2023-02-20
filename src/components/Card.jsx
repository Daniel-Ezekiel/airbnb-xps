import star from '../assets/star.png';

const Card = props => {
  console.log(props);
  const tagLine =
    props.openSpots === 0
      ? 'sold out'
      : props.location === 'Online'
      ? 'online'
      : undefined;

  return (
    <div className="experiences--card">
      {tagLine && <span className="card--tag">{tagLine}</span>}

      <img
        src={`${props.coverImg}`}
        alt="experience-image"
        className="card--image"
      />

      <p className="card--rating">
        <span>
          <img src={star} alt="star" /> {props.stats.rating}{' '}
        </span>
        ({props.stats.reviewCount}) • {props.location}
      </p>
      <h3 className="card--title">{props.title}</h3>
      <span className="card--pricing">
        <strong>From ${props.price}</strong> / person
      </span>
    </div>
  );
};

export default Card;
