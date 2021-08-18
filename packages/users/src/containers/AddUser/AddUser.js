import React, { useState } from "react"
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import NavigationIcon from '@material-ui/icons/Navigation';
import NewUser from "../NewUser/NewUser"
import "../AddUser/NewUser.css"

export default function NewUserBtn(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Grid item container xs={12} alignItems="flex-end" direction="column">
                <Grid item>
                    <Tooltip onClick={handleOnClick} title="Add User" placement="right-end">
                        <Fab color="primary">
                            <NavigationIcon />
                        </Fab>
                    </Tooltip>
                </Grid>
            </Grid>
            {isOpen ? 
            <div className="form">
                <NewUser submitUser={props.submitUser} handleForm={handleOnClick}/>
            </div>: null}
        </div>
    );
}