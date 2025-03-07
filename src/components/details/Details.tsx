import styles from './Details.module.css';
import { useGetCharacterByIdQuery } from '../../api/api';
import { Loader } from '../loader/Loader';
import { useRouter } from 'next/router';

interface DetailsProps {
  id: string | undefined | string[];
}

export function Details({ id }: DetailsProps) {
  const { data, isFetching } = useGetCharacterByIdQuery({ id });
  const router = useRouter();
  const { query } = router;

  const closeDetails = () => {
    Reflect.deleteProperty(query, 'details');
    router.replace({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <>
      {!isFetching ? (
        <div className={styles['card-details']}>
          <h2 className="name">{data.name}</h2>
          <div className={styles['wrapper-img-details']}>
            <img
              className={styles['img-details']}
              src={`/${id}.jpg`}
              alt={data.name}
            />
          </div>
          <p className="height">Height: {data.height}</p>
          <p className="mass">Mass: {data.mass}</p>
          <p className="birth_year">Birth year: {data.birth_year}</p>
          <p className="gender">Gender: {data.gender}</p>
          <p className="skin_color">Skin color: {data.skin_color}</p>
          <p className="eye_color">Eye color: {data.eye_color}</p>
          <button className="btn" onClick={closeDetails}>
            Close
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
