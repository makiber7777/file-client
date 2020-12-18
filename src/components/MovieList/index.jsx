import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from './styles'
import { useMovies } from '../../context/MoviesContext'
import { useApp } from '../../context/AppContext'

export function MovieList() {
    const classes = useStyles();
    const { push } = useHistory()
    const { movies, getMovies } = useMovies()
    const { setDeleteModal } = useApp()

    useEffect(() => {
        getMovies()
    }, [getMovies])

    function navigate(movie) {
        push(`/movie/${movie.name}`, { ext: movie.extension })
    }

    function deleteAction(movie) {
        setDeleteModal(movie.name)
    }

    return (
        <List className={classes.root}>
            {movies.map(movie => (
                <ListItem button key={movie.name} onClick={() => navigate(movie)}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={movie.name} secondary={movie.fileSizeInBytes} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteAction(movie)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}