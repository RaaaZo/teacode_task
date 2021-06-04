import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import useDebounce from '../hooks/useDebounce';
import { useContext, useState } from 'react';
import { ContactsContext } from '../providers/ContactsProvider';
import { useEffect } from 'react';
import { useCallback } from 'react';

const useStyles = makeStyles({
  input: { width: '100%' },
});

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { setFilteredContacts } = useContext(ContactsContext);

  const classes = useStyles();
  const { contacts } = useContext(ContactsContext);
  const debounce = useDebounce<string>(inputValue);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setInputValue(e.target.value);

  const filterByInputValue = useCallback(() => {
    if (!inputValue) {
      setFilteredContacts(contacts);
      return;
    }

    const filteredContacts = contacts.filter(
      (item) =>
        item.first_name.toLowerCase().includes(inputValue) ||
        item.last_name.toLowerCase().includes(inputValue)
    );

    setFilteredContacts(filteredContacts);
  }, [contacts, inputValue, setFilteredContacts]);

  useEffect(() => {
    filterByInputValue();
  }, [debounce, filterByInputValue]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          value={inputValue}
          onChange={inputChangeHandler}
          className={classes.input}
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchInput;
