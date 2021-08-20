import React, { Fragment } from "react"
import UsersComponent from '../containers/UsersComponent/UsersComponent'
import Modals from "../containers/Modals/Modals";

export default function Users() {

  return (
    <Fragment>
      <UsersComponent />
      <Modals />  
    </Fragment>
  );
}
