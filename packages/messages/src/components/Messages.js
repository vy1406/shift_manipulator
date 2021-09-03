import React, { Fragment } from "react"
import MessagesComponent from '../containers/MessagesComponent/MessagesComponent'
import Modals from "../containers/Modals/Modals";

export default function Messages( { loggedUser }) {
  console.log('in msmgs, ', loggedUser)
  return (
    <Fragment>
      <MessagesComponent />
      <Modals />
    </Fragment>
  );
}

