import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getUsers, addToDbUser } from '../../redux/actions/users';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NewUserBtn from "../AddUser/AddUser"


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const UsersComponent = ({ apiUsers, isLoading, error, fetchUsers, addUser }) => {
    const classes = useStyles();

    const handleSubmitUser = formUser => {
        addUser(formUser)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {apiUsers.length === 0 && !isLoading && <p>No users available!</p>}
            {error && !isLoading && <p>{error}</p>}
            {apiUsers.length > 0 && <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>USERNAME</StyledTableCell>
                            <StyledTableCell>EMAIL</StyledTableCell>
                            <StyledTableCell>PHONE NUMBER</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiUsers.map((user) => (
                            <StyledTableRow key={user._id}>
                                <StyledTableCell>{user.username}</StyledTableCell>
                                <StyledTableCell>{user.email}</StyledTableCell>
                                <StyledTableCell>{user.phoneNumber}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
            <NewUserBtn submitUser={handleSubmitUser} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    apiUsers: state.users.users,
    isLoading: state.users.loading,
    error: state.users.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(getUsers()),
    addUser: (formUser) => dispatch(addToDbUser(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);