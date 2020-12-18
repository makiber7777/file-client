import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Routes } from './routes'
import { LoadingNav } from '../components/NavLoading'

function Navigation() {

    return (
        <Switch>
            <Suspense fallback={<LoadingNav />}>
                <Route exact path="/" component={Routes.Home} />
                <Route path="/movies" component={Routes.Movies} />
                <Route path="/movie/:name" component={Routes.Movie} />
            </Suspense>
        </Switch>
    )
}

export default Navigation