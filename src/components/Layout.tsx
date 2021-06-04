import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { cyan } from '@material-ui/core/colors';
import SearchInput from './SearchInput';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: cyan[700],
    padding: '2rem',
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid className={classes.wrapper} item xs={12}>
          <Typography align='center' variant='h3' component='h1'>
            Contacts
          </Typography>
        </Grid>
      </Grid>
      <SearchInput />
      {children}
    </div>
  );
};

export default Layout;
