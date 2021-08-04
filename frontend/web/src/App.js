// react
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//redux
import {Provider} from 'react-redux';
import store from './redux';

// hook
import { CommonContext } from './context/CommonContext';
import { useLocalStorageSetState } from './common/CommonHooks';

// page
import RoutineSetting from './pages/RoutineSetting/';
import Home from './pages/Home/';
import NotFound from './pages/NotFound/';
import Challenge from './pages/Challenge/';
import CreateChallenge from './pages/CreateChallenge/';
import Profile from './pages/Profile/';
import MirrorSetting from './pages/MirrorSetting/';
import Layout from './layout/';
import Auth from './pages/Auth/';

// css
import './index.css';

// const
const defaultThumbnailImage = 'default_user.jpg';
const HOST = '192.168.0.82:3001';
const serverUrl = `http://localhost:3065`;
const serverUrlBase = `http://${HOST}`;
const serverImgUrl = `https://ssafy-viba-s3.s3.ap-northeast-2.amazonaws.com/public/`;

/// theme
const theme = createMuiTheme({
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
  const [user, setUser] = useLocalStorageSetState(
    {
      user_no: 0,
      user_id: '',
      user_nm: '',
      user_pwd: '',
      user_img_url: '',
      status: '',
      web_site: '',
      token: '',
    },
    'user',
  );

  const [infoData, setInfoData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDialogIndex, setUserDialogIndex] = useState(0);
  const [isShowKeyborad, setIsShowKeyborad] = useState(false);
  const [signDialogOpen, setSignDialogOpen] = useState(false);
  const [infoDialogOpen, setInfoDetailDialogOpen] = useState(false);
  const [userDialogOpen, setUserDetailDialogOpen] = useState(false);

  return (
    <CommonContext.Provider
    value={{
      serverUrl,
      user,
      setUser,
      drawerOpen,
      setDrawerOpen,
      signDialogOpen,
      setSignDialogOpen,
      infoDialogOpen,
      setInfoDetailDialogOpen,
      infoData,
      setInfoData,
      userDialogOpen,
      setUserDetailDialogOpen,
      userDialogIndex,
      setUserDialogIndex,
      serverUrlBase,
      serverImgUrl,
      isShowKeyborad,
      setIsShowKeyborad,
      defaultThumbnailImage,
    }}
  >

      <Provider store = {store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/RoutineSetting" component={RoutineSetting} />
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/Challenge" component={Challenge} />
              <Route exact path="/CreateChallenge" component={CreateChallenge} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/MirrorSetting" component={MirrorSetting} />

              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
      </CommonContext.Provider>
  );
};

export default App;
