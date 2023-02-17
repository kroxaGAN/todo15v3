import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setErrorSnackBarAC} from "../../app/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackbar=()=> {
    let errorSnackbarStatus=useAppSelector<null|string>(state=>state.app.errorSnackbarStatus)
    let dispatch=useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(setErrorSnackBarAC(null))
        }
        dispatch(setErrorSnackBarAC(null))
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={errorSnackbarStatus!==null} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center" }}>
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                    {errorSnackbarStatus}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
