import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Sidenav } from './components/Sidenav'
import { AppBarC } from './components/Appbar'
import Navigation from './routes'
import { AppProvider } from './context/AppContext'
import { MoviesProvider } from './context/MoviesContext'
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  return (
    <AppProvider>
      <MoviesProvider>
        <div className={classes.root}>
          <CssBaseline />
          <AppBarC />
          <Sidenav />
          <div className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Navigation />
          </div>
        </div>
      </MoviesProvider>
    </AppProvider>
  );
}

export default App;
