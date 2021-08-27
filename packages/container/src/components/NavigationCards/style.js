import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    singleCard: {
      width: '150px',
      height: '150px',
      backgroundColor: '#f5f5f5',
      border: '1px solid rgba(63, 81, 181, 0.5)',
      cursor: 'pointer',
      borderRadius: '4px',
      padding: '10px',
      boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      "&:hover, &:focus": {
        backgroundColor: 'rgba(63, 81, 181, 0.04)',
        border: '1px solid #3f51b5'
      },
    },
    backButton: {
      position: 'absolute',
      top: '80px',
      cursor: 'pointer',
    },
    cardWrapper: {
      paddingTop: '40px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
    },
    cardIcon: {
      fontSize: '4rem !important',
      fill: '#3f51b5 !important'
    },
    cardLabel: {
      color: '#3f51b5',
      textTransform: 'uppercase',
      fontFamily: 'cursive',
    }
  }));