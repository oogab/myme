// react
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

//redux
import { Provider } from 'react-redux';

// import store from './redux';
import store from './store/configureStore'

// page
import RoutineSetting from './pages/RoutineSetting/';
import Home from './pages/Home/';
import NotFound from './pages/NotFound/';
import ChallengeHome from './pages/Challenge/';
import ChallengeDetail from './pages/Challenge/[id]';
import CreateChallenge from './pages/Challenge/CreateChallenge';
import Profile from './pages/Profile/';
import MirrorSetting from './pages/MirrorSetting/';
import Auth from './pages/Auth/';

// css
import './index.css';

/// theme
const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans KR'].join(','),
    button: {
      fontFamily: 'Noto Sans KR',
    },
    body1: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

// app
const App = () => {
  return (
    <Provider store = {store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/Home" component={Home} />
            <Route path="/RoutineSetting" component={RoutineSetting} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/ChallengeHome" component={ChallengeHome} />
            <Route path="/CreateChallenge" component={CreateChallenge} />
            <Route path="/Profile" component={Profile} />
            <Route path="/MirrorSetting" component={MirrorSetting} />
            <Route path="/Challenge/:challengeId" component={ChallengeDetail} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
