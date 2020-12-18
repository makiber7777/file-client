import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles'
import { Title } from '../Title';
import { setRestServer } from '../../global/storage'

export const UrlCard = () => {
    const classes = useStyles();
    const [url, setUrl] = useState('')

    function saveUrl() {
        setRestServer(url)
        window.location.reload()
    }

    return (
        <Fragment>
            <Title>Url del servidor</Title>
            <div className={classes.depositContext}>
                <TextField
                    label="Url"
                    variant="outlined"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url || ''}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                disabled={url === ''}
                onClick={saveUrl}
            >
                Guardar
            </Button>
        </Fragment>
    )
}
