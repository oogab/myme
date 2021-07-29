import React, { useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { CommonContext } from '../../context/CommonContext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import {
  Button,
  Grid,
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Wrapper from './styles';



const DrawerListGroup = () => {
  let history = useHistory();
  const {
    user,
    setUser,
    setUserDetailDialogOpen,
    setUserDialogIndex,
    setDrawerOpen,
  } = useContext(CommonContext);

  const onClickEditProfileOpenHandler = () => {
    setDrawerOpen(false);
    setUserDialogIndex(0);
    setUserDetailDialogOpen(true);
  };

  const onClickChangePasswordOpenHandler = () => {
    setDrawerOpen(false);
    setUserDialogIndex(1);
    setUserDetailDialogOpen(true);
  };

  const onClickSignOutOpenHandler = () => {
    setDrawerOpen(false);
    setUser({
      user_no: 0,
      user_id: '',
      user_nm: '',
      user_pwd: '',
      user_img_url: '',
      status: '',
      web_site: '',
      token: '',
    });

    alert('You are logged out.');

    history.push('/');
  };

  const onClickRedirectPathHandler = name => () => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
    history.push(name);
  };

  return (
    <>
      <List className="drawer-list-group-list">
      {user.status && (
        <Fragment>
          <ListItem button key={'Me'} className="bg-unset">
              <Accordion className="panel">
                <AccordionSummary
                  className="panel-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Avatar
                    alt="profile picture"
                    src={`https://picsum.photos/id/82/200/300.webp`}
                    className="avatar"
                  />
                  <ListItemText
                    primary={'Me'}
                    disableTypography
                    className="list-item"
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <List className="expansion-panel">
                    <ListItem
                      button
                      key={'Edit Profile '}
                      onClick={onClickEditProfileOpenHandler}
                    >
                      <ListItemText
                        primary={'Edit Profile'}
                        disableTypography
                      />
                    </ListItem>
                    <ListItem
                      button
                      key={'Change Password'}
                      onClick={onClickChangePasswordOpenHandler}
                    >
                      <ListItemText
                        primary={'Change Password'}
                        disableTypography
                      />
                    </ListItem>
                    <ListItem button key={'Sign Out'}>
                      <ListItemText
                        primary={'Sign Out'}
                        disableTypography
                        className="list-item"
                        onClick={onClickSignOutOpenHandler}
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </ListItem>
        <ListItem
          button
          key={'MyRoutine'}
          onClick={onClickRedirectPathHandler('/MyRoutine')}
        >
          <ListItemText primary={'나의 루틴'} disableTypography />
        </ListItem>
        
          
            <ListItem
              button
              key={'RoutineSetting'}
              onClick={onClickRedirectPathHandler('/')}
            >
              <ListItemText primary={'루틴 설정'} disableTypography />
            </ListItem>
            
          
        <ListItem
          button
          key={'AboutMe'}
          onClick={onClickRedirectPathHandler('/AboutMe')}
        >
          <ListItemText primary={'개인 정보'} disableTypography />
        </ListItem>
        <ListItem
          button
          key={'ContactUs'}
          onClick={onClickRedirectPathHandler('/SmartMirror')}
        >
          <ListItemText primary={'스마트 미러 관리'} disableTypography />
        </ListItem>
        </Fragment>
      )}
      </List>
    </>
  );
};


export default function PersistentDrawerLeft(props) {
  const { drawerOpen } = useContext(CommonContext);

  return (
    <Wrapper>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Divider />
        <DrawerListGroup />
      </Drawer>
      <Hidden mdDown>
        <Drawer
        className="drawer drawer-tablet"
        variant="persistent"
        open
      >
        <Divider />
        <DrawerListGroup />
      </Drawer>
      </Hidden>
    </Wrapper>
  );
}
