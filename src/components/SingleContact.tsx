import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { ContactInterface } from '../types';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Checkbox from '@material-ui/core/Checkbox';
import { useContext } from 'react';
import { ContactsContext } from '../providers/ContactsProvider';

interface Props {
  contact: ContactInterface;
  isContactChecked: boolean;
}

const useStyles = makeStyles((theme) => {
  return {
    card: {
      width: '100%',
    },
    listItem: {
      cursor: 'pointer',
    },
  };
});

const SingleContact: React.FC<Props> = ({ contact, isContactChecked }) => {
  const classes = useStyles();

  const [isChecked, setIsChecked] = useState(isContactChecked ? true : false);

  const { pushToCheckedContacts, removeFromCheckedContacts } =
    useContext(ContactsContext);

  const checkboxHandler = () => {
    setIsChecked((prevState) => !prevState);
    console.log(contact.id);

    if (!isChecked) {
      pushToCheckedContacts(contact);
    } else {
      removeFromCheckedContacts(contact);
    }
  };

  return (
    <ListItem onClick={checkboxHandler} className={classes.listItem}>
      <Card className={classes.card} elevation={0}>
        <CardActionArea>
          <CardHeader
            avatar={<Avatar src={contact.avatar} />}
            title={`${contact.first_name}  ${contact.last_name}`}
            subheader={contact.email}
          />
        </CardActionArea>
      </Card>
      <Checkbox
        size='medium'
        checked={isChecked ? true : false}
        value={contact.id}
      />
    </ListItem>
  );
};

export default SingleContact;
