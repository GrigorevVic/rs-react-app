import styles from './CardItem.module.css';
import { People } from '../../types/types';
import { getIdFromUrl } from '../../utils/utils';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { people } = props;
  const dispatch = useDispatch();

  const isSelectedPeople = Boolean(
    useSelector((state: RootState) => selectById(state, people.name))
  );

  const id = getIdFromUrl(people.url);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      dispatch(selectChar(people));
    } else {
      dispatch(unselectChar(people.name));
    }
  };

  return (
    <li className={styles['card-container']} key={people.name}>
      <Link href={{ query: { ...router.query, details: id } }}>
        <div className={styles['wrapper-img']}>
          <img
            className={styles['card-img']}
            src={`/${id}.jpg`}
            alt={people.name}
          />
        </div>
        <p className={styles.name}>{people.name}</p>
      </Link>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isSelectedPeople}
        onChange={handleCheckboxChange}
      />
    </li>
  );
}
