import React, { Fragment, useEffect } from "react"
import MessagesComponent from '../containers/MessagesComponent/MessagesComponent'
import Modals from "../containers/Modals/Modals";
import { setLoggedUser } from "../redux/actions/msgs";
import { connect } from "react-redux";

const Messages = ( { loggedUser, setLoggedUser }) => {

  useEffect(() => {
    setLoggedUser(loggedUser)
  }, [])

  return (
    <Fragment>
      <MessagesComponent />
      <Modals />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
  setLoggedUser: (loggedUser) => dispatch(setLoggedUser(loggedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
