import React,  { lazy, Suspense } from 'react';
import _ from 'lodash';
import Progress from '../Progress';
import {useStyles} from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PeopleIcon from '@material-ui/icons/People';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import MessageIcon from '@material-ui/icons/Message';
import Typography from '@material-ui/core/Typography';

const MessagesLazy = lazy(() => import('../MessagesApp'))
const ShiftsLazy = lazy(() => import('../ShiftsApp'))
const UsersLazy = lazy(() => import('../UsersApp'))

export default ( { loggedUser } ) => { 
  const classes = useStyles();
  const [selectedCard, setSelectedCard] = React.useState(-1);
  
  const cards = [
          {
            index:0,
            component: <UsersLazy loggedUser={loggedUser}/>,
            label: 'Users',
            icon: <PeopleIcon className={classes.cardIcon}/>,
          },
          {
            index:1,
            component: <ShiftsLazy loggedUser={loggedUser}/>,
            label: 'Shifts',
            icon: <EventAvailableIcon className={classes.cardIcon}/>,
          },
          {
            index:2,
            component: <MessagesLazy loggedUser={loggedUser}/>,
            label: 'Messages',
            icon: <MessageIcon className={classes.cardIcon}/>,
          }
      ]     

  const isCardSelected = selectedCard !== -1  

  const renderAppByCard = () => {
    return (
      <Suspense key={selectedCard} fallback={<Progress />} >
        {cards[selectedCard].component}
      </Suspense>
    )
  }

  const renderViewCards = () => {
    return ( 
      <div className={classes.cardWrapper}>
        {_.map(cards, (singleCard) => (
          <div
            key={singleCard.index}
            className={classes.singleCard}
            onClick={() => setSelectedCard(singleCard.index)}
          >
          <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.cardLabel}
            >
            {singleCard.label}
          </Typography>
            
         {singleCard.icon}

          </div>
        ))}
      </div>
    )
  }

  return (
      <div>
        {isCardSelected && <ArrowBackIcon color="primary" fontSize="large" onClick={() => setSelectedCard(-1)} className={classes.backButton}/>}
        {isCardSelected ? renderAppByCard(1) : renderViewCards()}
      </div>
  )
}