import './styles.css';
import { CardItem } from '../cardItem/CardItem';
import { People } from '../../../types/types';

interface PeopleList {
  peopleList: People[];
}

export function CardList(props: PeopleList) {
  const { peopleList } = props;

  return (
    <ul className="cards-container">
      {peopleList.map((people: People) => (
        <CardItem people={people} key={people.name} />
      ))}
    </ul>
  );
}
