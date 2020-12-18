import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useStyles } from './styles'

export const LoadingNav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    )
}
