import React, { Fragment, useRef } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useStyles } from './styles'
import { Title } from '../Title';
import { useMovies } from '../../context/MoviesContext'
import { useHome } from '../../context/HomeContex'

export function Upload() {
    const classes = useStyles();
    const inputRef = useRef()
    const { setCurrent } = useMovies()
    const { setModal } = useHome()

    function openFilePicker() {
        inputRef.current.click()
    }

    function onChange(event) {
        const file = event.target.files[0]
        setCurrent(file)
        setModal(true)
    }

    return (
        <Fragment>
            <input type="file" ref={inputRef} onChange={e => onChange(e)} hidden />
            <Title>Subir archivo</Title>
            <div className={classes.depositContext}>
                <CloudUploadIcon
                    className={classes.iconStyle}
                    onClick={openFilePicker}
                />
            </div>
        </Fragment>
    );
}