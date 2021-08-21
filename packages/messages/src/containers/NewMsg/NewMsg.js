import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

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
    }
}));

export default function NewMsg({ submitMsg, users, isOpen, toggleIsOpen}) {
    const classes = useStyles();
    const [msgForm, setMsgForm] = useState({ sender_id: "60e5e3544ea83558e0482710", reciever_ids: [], body: "", subject: "" });
    const updateForm = (key, value) => setMsgForm({ ...msgForm, [key]: value })

    useEffect(() => {
        updateForm("reciever_ids", users)
    }, [users, toggleIsOpen]) 

    const onSubmit = () => {
        submitMsg(msgForm)
        toggleIsOpen(false);
    };

    const handleClose = () => {
        toggleIsOpen(false);
    };

    const handleDelete = (i) => {
        let handleRecievers = [...msgForm.reciever_ids]
        handleRecievers.splice(i, 1)
        updateForm("reciever_ids", handleRecievers)
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText>Recievers:</DialogContentText>
                    <Paper component="ul" className={classes.root}>
                        {msgForm.reciever_ids.map((user, i) => {
                            return (
                                <li key={i}>
                                    <Chip
                                        variant="outlined"
                                        // avatar={msgForm.recievers ? <Avatar>{user.username.charAt(0)}</Avatar> : <Avatar>{}</Avatar>}
                                        label={user.username}
                                        onDelete={() => handleDelete(i)}
                                    />
                                </li>
                            );
                        })}
                    </Paper>
                    <TextField
                        className={classes.textField}
                        autoFocus
                        margin="dense"
                        id="textFieldSubject"
                        label="Subject"
                        name="subject"
                        fullWidth
                        multiline
                        rows={2}
                        value={msgForm.subject}
                        onChange={e => updateForm(e.target.name, e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textField}
                        margin="normal"
                        id="textFieldBody"
                        label="Body"
                        name="body"
                        fullWidth
                        multiline
                        rows={6}
                        value={msgForm.body}
                        onChange={e => updateForm(e.target.name, e.target.value)}
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions className={classes.msgBtn}>
                    <Button className="msgBtn" onClick={handleClose} color="primary" >
                        Cancel
                    </Button>
                    <Button className="msgBtn" onClick={onSubmit} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}