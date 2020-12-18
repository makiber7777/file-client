import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles'
import { REST } from '../../global/urls'

const SingleMovie = () => {
    const { name } = useParams()
    const { state } = useLocation()
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
        >
            {state.ext !== '.mp4'
                ? <div>vista previa no dispinible</div>
                : <video className={classes.video} controls  >
                    <source src={`${REST}/movies/${name}`} type="video/mp4" />
                </video>
            }
            <div className={classes.url}>
                url: {`${REST}/movies/${name}`}
            </div>
        </Grid>
    )
}

export default SingleMovie