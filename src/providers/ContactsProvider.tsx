import React, { useState } from 'react';
import { ContactInterface, ContactsContextInterface } from '../types';

export const ContactsContext = React.createContext<ContactsContextInterface>({
  contacts: [],
  checkedContacts: [],
  filteredContacts: [],
  setContacts: () => {},
  pushToCheckedContacts: (contact: ContactInterface) => {},
  removeFromCheckedContacts: (contact: ContactInterface) => {},
  setFilteredContacts: () => {},
});

const ContactsProvider: React.FC = ({ children }) => {
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [checkedContacts, setCheckedContacts] = useState<ContactInterface[]>(
    []
  );
  const [filteredContacts, setFilteredContacts] = useState<ContactInterface[]>(
    []
  );

  const pushToCheckedContacts = (contact: ContactInterface) => {
    setCheckedContacts([...checkedContacts, contact]);
  };

  const removeFromCheckedContacts = (contact: ContactInterface) => {
    const filteredCheckedContacts = checkedContacts.filter(
      (item) => item.id !== contact.id
    );
    setCheckedContacts(filteredCheckedContacts);
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        checkedContacts,
        setContacts,
        pushToCheckedContacts,
        removeFromCheckedContacts,
        setFilteredContacts,
        filteredContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
