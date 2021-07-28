import React, { useContext, useEffect } from 'react';

import Layout from '../../layout/';
import Login from '../../components/Auth/SignResponsiveDialog'
import { CommonContext } from '../../context/CommonContext';
import Wrapper from './styles';
import { AppBar, Toolbar}  from '@material-ui/core';


const Auth = () => {
  const { user, setSignDialogOpen, setUserDetailDialogOpen } = useContext(
    CommonContext,
  );

  useEffect(() => {
    if (user.status === '') {
      setSignDialogOpen(true);
    } else if (user.status === 'login') {
      setUserDetailDialogOpen(true);
    } else if (user.status === 'default') {
      setSignDialogOpen(false);
    } else {
      alert('More than');
    }
  }, []);

  return(
    <Wrapper>
      {/* <AppBar className="toolBar">
        <Toolbar></Toolbar>
      </AppBar> */}
      <div className="box">
        <div className="box2"><img src="/images/contact_us_img_4.png" alt="" width="40px" style={{margin: "20px"}}/></div>
        <div className="LoginCard">
          <Login />
        </div>
      </div>
    </Wrapper>
  ) ;
};

export default Auth;
