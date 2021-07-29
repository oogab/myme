import React, { useContext } from 'react';
import Header from './Header/';
import Drawer from './Drawer/';
import { CommonContext } from '../context/CommonContext';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import Wrapper from './styles';
import {useMediaQuery} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const Layout = props => {
  const theme = useTheme();
  const { drawerOpen } = useContext(CommonContext);
  const { wannaHide, children } = props;
  const isNotTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Wrapper>
      <CssBaseline />
      
      <Drawer isNotTablet={isNotTablet} />
      {!wannaHide && <Header />}
      <Container
        open={drawerOpen}
        className={isNotTablet ? 'content' : 'content content-shift'}
        maxWidth="xl"
      >
        <div className="container">{children}</div>
      </Container>
    </Wrapper>
  );
};

export default Layout;
