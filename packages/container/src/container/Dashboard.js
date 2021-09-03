import React from 'react';
import _ from 'lodash';
import NavigationCards from '../components/NavigationCards/NavigationCards'

export default ( { loggedUser } ) => { 
    return (
        <div>
          <NavigationCards loggedUser={loggedUser}/>
        </div>
    )
}