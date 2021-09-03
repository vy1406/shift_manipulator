import React, { Fragment } from "react"
import UsersComponent from '../containers/UsersComponent/UsersComponent'
import Modals from "../containers/Modals/Modals";

export default function Users({loggedUser}) {
  console.log('in users, ', loggedUser)
  return (
    <Fragment>
      <UsersComponent />
      <Modals />  
    </Fragment>
  );
}
