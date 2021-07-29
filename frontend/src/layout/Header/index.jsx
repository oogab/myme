import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import store from 'store';

import { useTheme } from '@material-ui/core/styles';
import { CommonContext } from '../../context/CommonContext';

import {
  Grid,
  Typography,
  AppBar,
  Button,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Wrapper from './styles';

const Header = props => {
  let history = useHistory();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const {
    user,
    drawerOpen,
    setDrawerOpen,
    setSignDialogOpen,
    setUserDetailDialogOpen,
    setInfoDetailDialogOpen,
  } = useContext(CommonContext);

  const handleSignInDialogOpen = () => {
    history.push('/Auth');
  };

  const onClickRedirectPathHandler = name => e => {
    window.scrollTo(0, 0);
    if (name === '/SearchVote') {
      if (history.location.pathname === name) {
        history.goBack();
        store.remove('search');
      } else {
        history.push(name);
      }
    } else {
      history.push(name);
    }
  };

  useEffect(() => {
    setSignDialogOpen(false);
    setDrawerOpen(false);
    setInfoDetailDialogOpen(false);
    setUserDetailDialogOpen(false);
  }, []);

  return (
    <>
      <Wrapper>
        {isTablet && (
          <Grid
            container
            direction="column"
            justify="space-between"
            aria-label="open drawer"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
            className={drawerOpen ? 'menu-button on' : 'menu-button'}
          >
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
          </Grid>
        )}
        <AppBar
          position="fixed" style={{background:'#89DDBF'}}
          className={drawerOpen ? 'appbar appbar-shift' : 'appbar'}
        >
          <Grid container justify={!isTablet?'space-between':'space-evenly'} alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                className="logo"
                onClick={onClickRedirectPathHandler('/')}
              >
                Logo
              </Typography>
            </Grid>


            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <IconButton
                    aria-label="delete"
                    onClick={onClickRedirectPathHandler('/SearchVote')}
                  >
                    <SearchIcon
                      fontSize="default"
                      color="inherit"
                      htmlColor="#eeeeee"
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button
                   style={{background:'#89DDBF'}}
                    variant="contained"
                    onClick={handleSignInDialogOpen}
                    className="display-none header-button"
                  >
                    {user.status === 'login' ? 'My' : 'Sign In'}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Wrapper>
    </>
  );
};

export default Header;
