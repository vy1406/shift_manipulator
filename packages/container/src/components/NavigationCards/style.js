import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    singleCard: {
      width: '100px',
      height: '100px',
      backgroundColor: 'aqua',
      border: '1px solid black',
      cursor: 'pointer',
    },
    backButton: {
      position: 'absolute',
      top: '80px',
      cursor: 'pointer',
    },
    cardWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    }
  }));