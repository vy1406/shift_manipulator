import React, { Fragment, useEffect } from "react"
import ScheduleComponent from '../containers/ScheduleComponent/ScheduleComponent';
import { setLoggedUser } from '../redux/actions/schedule';
import { connect } from "react-redux";

const Shifts = ( { loggedUser, setLoggedUser }) => {
  useEffect(() => {
    setLoggedUser(loggedUser)
  }, [])

  return (
    <Fragment >
      <ScheduleComponent />
      {/* <Modals /> */}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
  setLoggedUser: (loggedUser) => dispatch(setLoggedUser(loggedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shifts);
