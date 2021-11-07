import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { getSubmittedShifts, updateSubmittedShifts, getSchedule, addToDbScheduledShifts } from '../../redux/actions/shifts';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import FormGroup from '@material-ui/core/FormGroup';


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
var eachDayOfInterval = require('date-fns/eachDayOfInterval')

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         marginBottom: '20px',
//     },
//     chip: {
//         margin: theme.spacing(0.5),
//     },
//     msgBtn: {
//         padding: '28px',
//         justifyContent: 'space-between',

//     },
//     textField: {
//         marginTop: '18px',
//         marginBottom: '15px',
//     },
//     formControl: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         // marginTop: '5px',
//         // marginBottom: '15px',
//     },
//     paper: {
//         marginTop: '5px',
//         marginBottom: '15px',
//         // flex-direction: column
//         // display: "flex",
//         // flexWrap: "wrap",
//         // justifyontent: "space-around",
//     },
// }));

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    paper: {
        marginTop: '5px',
        marginBottom: '15px',
        // flex-direction: column
        // display: "flex",
        // flexWrap: "wrap",
        // justifyontent: "space-around",
    },
    select: {
        // width: 200,
    }
}));

const ScheduleShifts = ({ apiUsers, apiSubmittedShifts, isLoading, error, state, fetchSubmittedShifts, putSubmittedShifts, fetchScheduledShifts, addScheduledShifts }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [subShift, setSubShift] = useState([]);
    const [shiftsDate, setShiftsDate] = useState([]);
    const [scheduledShifts, setScheduledShifts] = useState({});
    const [age, setAge] = React.useState([]);


    const wantedShift = (value) => {
        return value === true
    }

    useEffect(() => {
        fetchSubmittedShifts()
        fetchScheduledShifts()
    }, [])

    useEffect(() => {
        (async () => {
            let usersShifts = []
            let schedule = {}
            for (let submittedShift of apiSubmittedShifts) {
                if (submittedShift.createDate === submittedShift.updateDate) {
                    let userShift = { userName: { ...apiUsers.find(user => user._id === submittedShift.userId) }.username, userId: submittedShift.userId, shifts: submittedShift.shifts }
                    usersShifts.push(userShift)

                    let shifts = []
                    for (let i = 0; i < submittedShift.shifts.length; i++) {
                        let shift = {
                            date: submittedShift.shifts[i].date,
                            morning: "",
                            noon: "",
                            evening: ""
                        }
                        shifts.push(shift)
                    }

                    schedule = {
                        adminId: submittedShift.shifts[0].adminId,
                        dateFrom: submittedShift.shifts[0].date,
                        dateTo: submittedShift.shifts[submittedShift.shifts.length - 1].date,
                        shifts: shifts
                    }
                }
            }
            setScheduledShifts(schedule)
            setSubShift(usersShifts)

        })()
    }, [apiSubmittedShifts])


    const handleChange = (event, i, time) => {
        let newScheduledShifts = { ...scheduledShifts }
        newScheduledShifts.shifts[i][time] = event.target.value
        setScheduledShifts(newScheduledShifts)
    };

    const submitScheduledShifts = () => {
        console.log("==========schedule---component==========");
        console.log(scheduledShifts);
        console.log("==========schedule---component==========");
        // addScheduledShifts(scheduledShifts)
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button onClick={handleClickOpen}>Schedule Shifts</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        {scheduledShifts.shifts ? scheduledShifts.shifts.map((shift, i) => {
                            return (
                                <Paper key={i} className={classes.paper}>
                                    <FormLabel component="legend">{shift.date}</FormLabel>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Morning</InputLabel>
                                        <Select
                                            className={classes.select}
                                            fullWidth
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={shift.morning}
                                            onChange={e => handleChange(e, i, "morning")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {subShift.map((s, k) => {
                                                return (
                                                    s.shifts[i].morningCheckbox ? <MenuItem key={k} value={s.userId}>{s.userName}</MenuItem> : null
                                                )
                                            })}
                                        </Select>
                                    </FormControl>



                                    {/* <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Noon</InputLabel>
                                        <Select
                                            // label="lol"
                                            className={classes.select}
                                            fullWidth
                                            // multiple
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={scheduledShifts.shifts[i].noon}
                                            onChange={e => handleChange(e, i, "noon")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {shift.shifts.map((s, k) => {
                                                return (
                                                    // subShift[k].shifts[i].noonCheckbox ?
                                                    //     <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null

                                                    subShift[k] ? subShift[k].shifts[i].noonCheckbox ? <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null : null
                                                    // s.noonCheckbox ? <MenuItem key={k} value={shift.userId}>{shift.userName}</MenuItem> : null 
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-dialog-select-label">Evening</InputLabel>
                                        <Select
                                            // label="lol"
                                            className={classes.select}
                                            fullWidth
                                            // multiple
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={scheduledShifts.shifts[i].evening}
                                            onChange={e => handleChange(e, i, "evening")}
                                            input={<Input />}
                                        >
                                            <MenuItem value={""}>
                                                <em>None</em>
                                            </MenuItem>
                                            {shift.shifts.map((s, k) => {
                                                return (
                                                    // subShift[k].shifts[i].eveningCheckbox ?
                                                    //     <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null

                                                    subShift[k] ? subShift[k].shifts[i].eveningCheckbox ? <MenuItem key={k} value={subShift[k].userId}>{subShift[k].userName}</MenuItem> : null : null

                                                    // s.eveningCheckbox ? <MenuItem key={k} value={shift.userId}>{shift.userName}</MenuItem> : null
                                                )
                                            })}
                                        </Select>
                                    </FormControl> */}
                                </Paper>
                            )
                        }) : null}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitScheduledShifts} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    apiUsers: state.users.users,
    apiSubmittedShifts: state.submittedShifts.submittedShifts,
    isLoading: state.submittedShifts.loading,
    error: state.submittedShifts.error,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    fetchSubmittedShifts: () => dispatch(getSubmittedShifts()),
    putSubmittedShifts: () => dispatch(updateSubmittedShifts()),
    fetchScheduledShifts: () => dispatch(getSchedule()),
    addScheduledShifts: (schedule) => dispatch(addToDbScheduledShifts(schedule)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleShifts);