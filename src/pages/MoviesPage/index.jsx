import React from 'react'
import Container from '@material-ui/core/Container';
import { MovieList } from '../../components/MovieList'
import { DeleteModal } from '../../components/DeleteModal'

const MoviesPage = () => {
    return (
        <Container>
            <DeleteModal />
            <MovieList />
        </Container>
    )
}

export default MoviesPage
