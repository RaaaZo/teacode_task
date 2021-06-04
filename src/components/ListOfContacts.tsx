import useFetch from '../hooks/useFetch';
import SingleContact from './SingleContact';
import List from '@material-ui/core/List';
import { useContext } from 'react';
import { ContactsContext } from '../providers/ContactsProvider';
import Loader from './Loader';
import Error from './Error';

const ListOfContacts: React.FC = () => {
  const { error, isLoading } = useFetch();
  const { filteredContacts, checkedContacts } = useContext(ContactsContext);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {isLoading ? <Loader /> : null}

      <List>
        {!isLoading
          ? filteredContacts.map((contact) => {
              const isChecked = () =>
                checkedContacts.find((item) => item.id === contact.id);

              return (
                <SingleContact
                  isContactChecked={isChecked() ? true : false}
                  key={contact.id}
                  contact={contact}
                />
              );
            })
          : null}
      </List>
    </>
  );
};

export default ListOfContacts;
