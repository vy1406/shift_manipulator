import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { addToDbReqShift } from '../../redux/actions/shifts';
import { getUsers } from '../../redux/actions/users';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
var eachDayOfInterval = require('date-fns/eachDayOfInterval')

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginBottom: '20px',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    msgBtn: {
        padding: '28px',
        justifyContent: 'space-between',

    },
    textField: {
        marginTop: '18px',
        marginBottom: '15px',
    },
    formControl: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        // marginTop: '5px',
        // marginBottom: '15px',
    },
    paper: {
        marginTop: '5px',
        marginBottom: '15px',
        // flex-direction: column
        // display: "flex",
        // flexWrap: "wrap",
        // justifyontent: "space-around",
    },
}));



const NewRequestShifts = ({ apiUsers, state, isLoading, error, fetchUsers, addRequestShift }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [reqShift, setReqShift] = useState({ adminId: "60e5e3274ea83558e048270d", recieversIds: [], dateFrom: "", dateTo: "", shifts: [] });
    const [dates, setDates] = useState({ from: new Date(), to: new Date() });
    const [checkbox, setCheckbox] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        updateReqShift("recieversIds", apiUsers)
    }, [apiUsers])


    useEffect(() => {
        const numberOfDates = dates.to.getDate() - dates.from.getDate();

        const checkboxes = []
        const t = new Date(dates.from)
        for (let i = 0; i < numberOfDates + 1; i++) {
            i > 0 ? t.setDate(t.getDate() + 1) : null;
            t.getDay() === 6 ? t.setDate(t.getDate() + 1) && i++ : null;
            const checkboxesToAdd = {
                date: t.toLocaleDateString(),
                morningCheckbox: false,
                noonCheckbox: false,
                eveningCheckbox: false,
            }
            checkboxes.push(checkboxesToAdd)
        }
        setCheckbox(checkboxes)
    }, [dates])

    const updateReqShift = (key, value) => setReqShift({ ...reqShift, [key]: value })

    function disableWeekends(date) {
        return date.getDay() === 6;
    }

    const handleSubmitReqShift = () => {
        reqShift.recieversIds = reqShift.recieversIds.map(user => user._id)
        reqShift.dateFrom = dates.from.toLocaleDateString()
        reqShift.dateTo = dates.to.toLocaleDateString()
        reqShift.shifts = checkbox
        addRequestShift(reqShift)
        setOpen(false);
        setDates({ from: new Date(), to: new Date() })
        updateReqShift("recieversIds", apiUsers)
    }

    const handleDateChange = (date, name) => {
        setDates({ ...dates, [name]: date })
    };

    const handleCheckboxChange = (e, i) => {
        let updateCheckbox = [...checkbox]
        updateCheckbox[i][e.target.name] = e.target.checked
        setCheckbox(checkbox[i] = updateCheckbox);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDates({ from: new Date(), to: new Date() })
        updateReqShift("recieversIds", apiUsers)
    };

    const handleDelete = (i) => {
        let handleRecievers = [...reqShift.recieversIds]
        handleRecievers.splice(i, 1)
        updateReqShift("recieversIds", handleRecievers)
    };

    console.log(state);
    console.log(dates);

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Shift Req
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="dense"
                                id="date-picker-dialog"
                                label="From"
                                format="dd/MM/yyyy"
                                value={dates.from}
                                onChange={e => handleDateChange(e, "from")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                shouldDisableDate={disableWeekends}
                            />
                            <KeyboardDatePicker
                                margin="dense"
                                id="date-picker-dialog2"
                                label="To"
                                format="dd/MM/yyyy"
                                value={dates.to}
                                onChange={e => handleDateChange(e, "to")}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                shouldDisableDate={disableWeekends}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <DialogContentText>Recievers:</DialogContentText>
                    <Paper component="ul" className={classes.root}>
                        {reqShift.recieversIds.map((user, i) => {
                            return (
                                <li key={i}>
                                    <Chip
                                        variant="outlined"
                                        label={user.username}
                                        onDelete={() => handleDelete(i)}
                                    />
                                </li>
                            );
                        })}
                    </Paper>
                    {checkbox.map((cb, i) => {
                        return (
                            <FormControl key={i} fullWidth >
                                <FormLabel component="legend">{cb.date}</FormLabel>
                                <Paper className={classes.paper}>
                                    <FormGroup row className={classes.formControl}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={cb.morningCheckbox} onChange={e => handleCheckboxChange(e, i)} color="primary" name="morningCheckbox" />}
                                            label="Morning"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={cb.noonCheckbox} onChange={e => handleCheckboxChange(e, i)} color="primary" name="noonCheckbox" />}
                                            label="Noon"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={cb.eveningCheckbox} onChange={e => handleCheckboxChange(e, i)} color="primary" name="eveningCheckbox" />}
                                            label="Evening"
                                        />
                                    </FormGroup>
                                </Paper>

                            </FormControl>

                        )
                    })}
                </DialogContent>
                <DialogActions className={classes.msgBtn}>
                    <Button className="msgBtn" onClick={handleClose} color="primary" >
                        Cancel
                    </Button>
                    <Button className="msgBtn" onClick={handleSubmitReqShift} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    apiUsers: state.users.users,
    isLoading: state.users.loading,
    error: state.users.error,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(getUsers()),
    addRequestShift: (reqShiftForm) => dispatch(addToDbReqShift(reqShiftForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestShifts);