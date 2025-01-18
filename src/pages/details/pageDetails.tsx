import './styles.css';
import { useLocation } from 'react-router-dom';
import { getDataById } from '../../api/api';
import { useState, useEffect } from 'react';
import { People } from '../../types/types';
import { Details } from '../../components/details/Details';
import { Loader } from '../../components/loader/Loader';

export function PageDetails() {
  const [, setErrorMsg] = useState({ errorMsg: '' });
  const [response, setResponse] = useState<People>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('details');

  useEffect(() => {
    async function fetchData() {
      if (id) {
        try {
          const response = await getDataById(id);
          setResponse(response);
        } catch (e) {
          setErrorMsg({ errorMsg: (e as Error).message });
        }
      }
    }
    fetchData();
  }, [id]);

  return <>{response ? <Details character={response} /> : <Loader />} </>;
}
