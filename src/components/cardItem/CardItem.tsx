import './styles.css';
import { People } from '../../types/types';
import { getIdFromUrl } from '../../utils/utils';
//import { useSearchParams } from 'react-router-dom';

interface PeopleItem {
  people: People;
}

export function CardItem(props: PeopleItem) {
  //const [searchParams] = useSearchParams();
  //console.log(searchParams);

  const handleClick = async () => {
    console.log('card details');
  };

  const { people } = props;
  const id = getIdFromUrl(people.url);
  const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  //const img = id;

  return (
    <li className="card-container" key={people.name} onClick={handleClick}>
      <div className="wrapper-img">
        <img className="card-img" src={img} alt={people.name} />
      </div>
      <p className="name">{people.name}</p>
    </li>
  );
}

/*
      <p className="height">Height: {people.height}</p>
      <p className="mass">Mass: {people.mass}</p>
      <p className="birth_year">Birth year: {people.birth_year}</p>
      <p className="gender">Gender: {people.gender}</p>
      <p className="skin_color">Skin color: {people.skin_color}</p>
      <p className="eye_color">Eye color: {people.eye_color}</p>

*/
