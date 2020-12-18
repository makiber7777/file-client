import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './styles'

export const Alert = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MuiAlert elevation={6} variant="filled" {...props} />
        </div>
    )
}
