import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Transition } from './styles'
import { useHome } from '../../context/HomeContex'
import { useMovies } from '../../context/MoviesContext'


export function UploadModal() {
    const { modal, setModal } = useHome()
    const { upload, current, setCurrent } = useMovies()

    function cancel() {
        handleClose()
    }

    async function confirm() {
        upload(current)
        handleClose()
    }

    const handleClose = () => {
        setModal(false);
        setCurrent({})
    };

    return (
        <div>
            <Dialog
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Subir archivo"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        nombre: {current.name || 'desconocido'} <br />
                      tipo: {current.type || 'desconocido'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancel} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={confirm} color="primary">
                        Subir
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}