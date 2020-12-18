import React, { useState } from 'react'
import Axios from 'axios'
import { REST } from '../global/urls'

const MoviesContext = React.createContext()

export function MoviesProvider(props) {
    const [open, setOpen] = useState(false)
    const [banner, setBanner] = useState(null)
    const [movies, setMovies] = useState([])
    const [current, setCurrent] = useState({})
    const [baseData, setBaseData] = useState(null)

    async function deleteMovie(name) {
        try {
            await Axios.delete(`${REST}/movies/${name}`)
        } catch (error) {
            console.log(error)
        }
    }

    async function getMovies() {
        try {
            const { data } = await Axios.get(`${REST}/movies`)
            setMovies(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function upload(file) {
        setBanner({ type: 'info', message: 'subiendo archivo ...' })
        try {
            const fd = new FormData()
            fd.append('file', file)
            const { data } = await Axios.post(`${REST}/movies/upload`, fd)
            setBanner({ type: 'success', message: 'archivo subido correctamente' })
            setCurrent({})
            getMovies()
            return data
        } catch (error) {
            setBanner({ type: 'error', message: 'error al subir archivo' })
            setCurrent({})
            console.log(error)
        }
    }

    const value = {
        open,
        setOpen,
        banner,
        setBanner,
        deleteMovie,
        upload,
        getMovies,
        movies,
        current,
        setCurrent,
        baseData,
        setBaseData
    }

    return <MoviesContext.Provider  {...props} value={value} />
}

export function useMovies() {
    const context = React.useContext(MoviesContext)
    if (!context) throw new Error('useMovies is out from provider')
    return context
}