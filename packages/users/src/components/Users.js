import React, { Fragment, useEffect } from "react"
import UsersComponent from '../containers/UsersComponent/UsersComponent'
import Modals from "../containers/Modals/Modals";
import { setLoggedUser } from "../redux/actions/users";
import { connect } from "react-redux";

const Users = ({loggedUser, setLoggedUser}) => {

  useEffect(() => {
    setLoggedUser(loggedUser)
  }, [])

  return (
    <Fragment>
      <UsersComponent />
      <Modals />  
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
  setLoggedUser: (loggedUser) => dispatch(setLoggedUser(loggedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);
