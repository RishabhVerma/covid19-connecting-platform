import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { theme } from './theme/theme';
import configureStore from './store/config/configureStore';

import CssBaseline from '@material-ui/core/CssBaseline';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-163486743-1');


const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState());
});

const App = () => (
  <>
  <CssBaseline />
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <AppRouter />
      </SnackbarProvider>
    </MuiThemeProvider>
  </Provider>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));