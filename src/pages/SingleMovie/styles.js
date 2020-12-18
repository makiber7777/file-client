import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    grid: {
        height: '80%',
        width: '100%'
    },
    video: {
        width: 'auto',
        maxHeight: '40em',
        marginTop: '5em'
    },
    url: {
        fontSize: '2em',
        marginTop: '1em'
    }
}));