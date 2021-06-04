import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => {
  return {
    errorWrapper: {
      padding: '2rem',
    },
  };
});

const Error: React.FC<{ error: string }> = ({ error }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.errorWrapper} container>
      <Grid xs={12} item>
        <Typography align='center' variant='h5'>
          {error}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
