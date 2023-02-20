import Card from './Card';
import cardData from '../data';

const AllCards = () => {
  const cards = cardData.map(data => <Card key={data.id} {...data} />);

  return <section className="experiences">{cards}</section>;
};

export default AllCards;
