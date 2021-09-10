import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {setAppError} from "../../../main/bll/app-reducer";
import {AppStateType} from "../../../main/bll/store";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type ErrorSnacknarPropsType = {
    errorStatus: boolean
    changeErrorStatus: (status: boolean) => void
}

export default function ErrorSnackbar(props: ErrorSnacknarPropsType) {

    const error = "This pack is public and you can't delete it"
        // "This pack is public and you can't delete it"
    const dispatch = useDispatch();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppError(null));
        props.changeErrorStatus(false)
    };

    return (
        <Snackbar open={props.errorStatus} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}
