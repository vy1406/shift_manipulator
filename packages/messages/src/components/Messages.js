import React, { Fragment } from "react"
import MessagesComponent from '../containers/MessagesComponent/MessagesComponent'
import Modals from "../containers/Modals/Modals";

export default function Messages() {

  return (
    <Fragment>
      <MessagesComponent />
      <Modals />  
    </Fragment>
  );
}

