import styles from './CardList.module.css';
import { CardItem } from '../cardItem/CardItem';
import { People, PeopleList } from '../../types/types';
import { Flyout } from '../flyout/Flyout';

export function CardList({ peopleList }: PeopleList) {
  return (
    <>
      {peopleList && peopleList.length > 0 ? (
        <ul className={styles['cards-container']}>
          {peopleList.map((people: People) => (
            <CardItem people={people} key={people.name} />
          ))}
        </ul>
      ) : (
        <p className="no-results">Nothing found for your request</p>
      )}
      <Flyout />
    </>
  );
}
