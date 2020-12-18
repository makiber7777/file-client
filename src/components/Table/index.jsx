import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './styles'
import { Title } from '../Title'
import { useMovies } from '../../context/MoviesContext'


export function TableC() {
    const classes = useStyles()
    const { push } = useHistory()
    const { movies, getMovies } = useMovies()

    function preventDefault(event) {
        event.preventDefault();
        push('/movies')
    }

    useEffect(() => {
        getMovies()
    }, [getMovies])

    return (
        <Fragment>
            <Title>
                Archivos Recientes
            </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Peso</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movies.slice(0, 3).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell>{row.extension}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.fileSizeInBytes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" className={classes.pointer} onClick={preventDefault}>
                    ver todos los archivos
                </Link>
            </div>
        </Fragment>
    );
}