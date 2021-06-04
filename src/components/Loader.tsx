import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => {
  return {
    loaderWrapper: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorWrapper: {
      padding: '2rem',
    },
  };
});

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress color='secondary' size={80} />
    </div>
  );
};

export default Loader;
