import Card from './Card';
import cardData from '../data';

const AllCards = () => {
  const cards = cardData.map(data => (
    <Card
      tag={data.openSpots ? 'online' : 'sold out'}
      img={data.coverImg}
      rating={data.stats.rating.toFixed(1)}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      title={data.title}
      price={data.price}
    />
  ));

  return <section className="experiences">{cards}</section>;
};

export default AllCards;
