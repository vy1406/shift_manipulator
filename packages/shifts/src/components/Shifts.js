import React, { Fragment, useEffect } from "react"
import ScheduleComponent from '../containers/ScheduleComponent/ScheduleComponent';
import NewRequestShifts from "../containers/NewRequestShifts/NewRequestShifts";
import { setLoggedUser } from '../redux/actions/shifts';
import { connect } from "react-redux";

const Shifts = ( { loggedUser, setLoggedUser }) => {
  useEffect(() => {
    setLoggedUser(loggedUser)
  }, [])

  return (
    <Fragment >
      <ScheduleComponent />
      <NewRequestShifts />
      {/* <Modals /> */}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
  setLoggedUser: (loggedUser) => dispatch(setLoggedUser(loggedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shifts);
