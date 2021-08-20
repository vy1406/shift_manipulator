import React,  { lazy, Suspense } from 'react';
import _ from 'lodash';
import Progress from '../Progress';
import {useStyles} from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MessagesLazy = lazy(() => import('../MessagesApp'))
const ShiftsLazy = lazy(() => import('../ShiftsApp'))
const UsersLazy = lazy(() => import('../UsersApp'))

export default ( ) => { 
  const classes = useStyles();
  const [selectedCard, setSelectedCard] = React.useState(-1);

  const cards = [
          {
            index:0,
            component: <UsersLazy />,
            label: 'Users'
          },
          {
            index:1,
            component: <ShiftsLazy />,
            label: 'Shifts'
          },
          {
            index:2,
            component: <MessagesLazy />,
            label: 'Messages'
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
            {singleCard.label}
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