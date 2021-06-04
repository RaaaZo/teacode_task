import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContactsContext } from '../providers/ContactsProvider';
import { ContactInterface } from '../types';

// Only one route for fetching data so it can be fetched there. If there will be more endpoints I will do it more generic with url, params etc
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { setContacts } = useContext(ContactsContext);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await axios.get<ContactInterface[]>(
          'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
        );

        const sortedData = response.data.sort((a, b) =>
          a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase())
        );

        setContacts(sortedData);
        setIsLoading(false);
      } catch (error) {
        setError('Cannot display list of contacts. Try again later.');
        setIsLoading(false);
      }
    })();
  }, [setContacts]);

  return {
    isLoading,
    error,
  };
};

export default useFetch;
