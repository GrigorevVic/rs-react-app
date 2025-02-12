import './styles.css';
import { People } from '../../types/types';
//import { getIdFromUrl } from '../../utils/utils';
// import { useRouter } from 'next/router';
//import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChar,
  unselectChar,
  selectById,
} from '../../store/selectedCharSlice';
import type { RootState } from '../../store/store';

interface PeopleItem {
  people: People;
}
export function CardItem(props: PeopleItem) {
  // const router = useRouter();
  const { people } = props;
  // const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // console.log(router);

  const isSelectedPeople = Boolean(
    useSelector((state: RootState) => selectById(state, people.name))
  );

  //const id = getIdFromUrl(people.url);
  //const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  /*
  const getPath = (): string => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('details', id.toString());
    return `?${newSearchParams}`;
  };
*/
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      dispatch(selectChar(people));
    } else {
      dispatch(unselectChar(people.name));
    }
  };
  // <Link to={getPath()}>
  return (
    <li className="card-container" key={people.name}>
      <Link href="aaaaa">
        <div className="wrapper-img">
          <img className="card-img" src="/star-wars.jpg" alt={people.name} />
        </div>
        <p className="name">{people.name}</p>
      </Link>
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelectedPeople}
        onChange={handleCheckboxChange}
      />
    </li>
  );
}
