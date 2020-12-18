import { lazy } from 'react'
import { HomePage } from '../pages/HomePage/'

export const Routes = {
    Home: HomePage,
    Movies: lazy(() => import('../pages/MoviesPage')),
    Movie: lazy(() => import('../pages/SingleMovie'))
}