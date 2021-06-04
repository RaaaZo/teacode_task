export interface ContactInterface {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
}

export interface ContactsContextInterface {
  contacts: ContactInterface[];
  checkedContacts: ContactInterface[];
  filteredContacts: ContactInterface[];
  setContacts: React.Dispatch<React.SetStateAction<ContactInterface[]>>;
  pushToCheckedContacts: (contact: ContactInterface) => void;
  removeFromCheckedContacts: (contact: ContactInterface) => void;
  setFilteredContacts: React.Dispatch<React.SetStateAction<ContactInterface[]>>;
}
