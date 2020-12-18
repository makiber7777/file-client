import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useApp } from '../../context/AppContext'
import { useMovies } from '../../context/MoviesContext'

export function DeleteModal() {
    const { deleteModal, setDeleteModal } = useApp()
    const { deleteMovie } = useMovies()

    function handleClose() {
        setDeleteModal(null);
    }

    function dleteAction() {
        deleteMovie(deleteModal)
        handleClose()
    }

    return (
        <Dialog
            open={deleteModal !== null}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{`Eliminar este archivo ${deleteModal || 'desconocido'}`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    La eliminacion de este archivo es permanente.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    cancelar
                </Button>
                <Button onClick={dleteAction} color="primary" autoFocus>
                    eleminar
                </Button>
            </DialogActions>
        </Dialog>
    );
}