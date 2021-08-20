import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    singleCard: {
      width: '100px',
      height: '100px',
      backgroundColor: 'aqua',
      border: '1px solid black'
    },
    backButton: {
      position: 'absolute',
      width: '100px',
      height: '20px',
      backgroundColor: 'blue',
      border: '1px solid black'
    },
    cardWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    }
  }));