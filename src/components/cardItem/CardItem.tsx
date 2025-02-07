import './styles.css';
import { People } from '../../types/types';
import { getIdFromUrl } from '../../utils/utils';
import { Link, useSearchParams } from 'react-router-dom';

interface PeopleItem {
  people: People;
}

export function CardItem(props: PeopleItem) {
  const [searchParams] = useSearchParams();

  const { people } = props;
  const id = getIdFromUrl(people.url);
  const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  const getPath = (): string => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('details', id.toString());
    return `?${newSearchParams}`;
  };

  return (
    <li className="card-container" key={people.name}>
      <Link to={getPath()}>
        <div className="wrapper-img">
          <img className="card-img" src={img} alt={people.name} />
        </div>
        <p className="name">{people.name}</p>
      </Link>
    </li>
  );
}
