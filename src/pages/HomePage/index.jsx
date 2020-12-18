import React, { useEffect } from 'react'
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles'
import { TableC } from '../../components/Table'
import { UploadModal } from '../../components/UploadModal'
import { Upload } from '../../components/Upload'
import { Alert } from '../../components/Alert'
import { UrlCard } from '../../components/UrlCard'
import { HomeProvider } from '../../context/HomeContex'
import { useMovies } from '../../context/MoviesContext'

export const Page = () => {
    const classes = useStyles();
    const { banner, setBanner } = useMovies()

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    useEffect(() => {
        return () => setBanner(null)
    }, [setBanner])

    return (
        <div>
            <UploadModal />
            <Container maxWidth="lg" className={classes.container}>
                {banner && <Alert severity={banner.type}>{banner.message}</Alert>}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={classes.paper}>
                            <TableC />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Upload />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <UrlCard />
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}

export const HomePage = () => <HomeProvider><Page /></HomeProvider>