import React, { Fragment, useCallback, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import { connect, useDispatch, useSelector } from 'react-redux';
import {ExpandMore, HomeRounded, EventNoteRounded, GavelRounded, LaptopWindowsRounded, FaceRounded} from '@material-ui/icons';

import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { logoutRequestAction } from '../../../reducers/user';
import { CLEAR_MY_ROUTINES } from '../../../reducers/routine';
import { CLEAR_MY_CHALLENGES } from '../../../reducers/challenge';
import { CLOSE_DRAWER } from '../../../reducers/layout';

const DrawerListGroup = (props) => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.user)

  let history = useHistory();

  function closeDrawer(){
      dispatch({
        type: CLOSE_DRAWER
      })
      window.scrollTo(0, 0);
  };

  const onSignOut = useCallback(() => {
    dispatch({
      type: CLEAR_MY_ROUTINES
    })
    dispatch({
      type: CLEAR_MY_CHALLENGES
    })
    dispatch({
      type: CLOSE_DRAWER
    })
    dispatch(logoutRequestAction())
  }, [me])

  useEffect(() => {
    if (!me) {
      history.push('/')
    }
  }, [me])

  return (
    <>
      <List className="drawer-list-group-list">
        <Fragment>
          <ListItem button key={'Me'} className="bg-unset">
            <Accordion className="panel">
              <AccordionSummary
                className="panel-summary"
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Avatar
                  alt="profile picture"
                  src={`https://picsum.photos/id/82/200/300.webp`}
                  className="avatar"
                />
                <ListItemText
                  primary={me?.nickname}
                  disableTypography
                  className="list-item"
                />
              </AccordionSummary>
              <AccordionDetails>
                <List className="expansion-panel">
                  <NavLink to="/Profile" className='router' onClick={closeDrawer}
                    activeClassName='active-router'>
                  <ListItem
                    button
                    key={'MyProfile'}
                  >
                    <ListItemText
                      primary={'프로필 수정'}
                      disableTypography
                    />
                  </ListItem>
                  </NavLink>
                  <NavLink to="/password" className='router' onClick={closeDrawer}
                    activeClassName='active-router'>
                    <ListItem
                      button
                      key={'Change Password'}
                    >
                      <ListItemText
                        primary={'비밀번호 변경'}
                        disableTypography
                      />
                    </ListItem>
                  </NavLink>
                  <ListItem button key={'Sign Out'}>
                    <ListItemText
                      primary={'로그아웃'}
                      disableTypography
                      className="list-item"
                      onClick={onSignOut}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        <NavLink to="/Home" className='router' onClick={closeDrawer}
        activeClassName='active-router'>
        <ListItem
          button
          key={'MyRoutine'}
        >
          <ListItemIcon>
            <HomeRounded/>
          </ListItemIcon>
          <ListItemText primary={'홈'} disableTypography />
        </ListItem>
        </NavLink>
        <NavLink to="/RoutineSetting" className='router' onClick={closeDrawer}
        activeClassName='active-router'>
              <ListItem
                button
                key={'RoutineSetting'}
              >
                <ListItemIcon><EventNoteRounded/></ListItemIcon>
                <ListItemText primary={'루틴 설정'} disableTypography />
              </ListItem>
        </NavLink>
        <NavLink to="/ChallengeHome" className='router' onClick={closeDrawer}
        activeClassName='active-router'>
              <ListItem
                button
                key={'ChallengeHome'}
              >
                <ListItemIcon><GavelRounded/></ListItemIcon>
                <ListItemText primary={'챌린지'} disableTypography />
              </ListItem>
        </NavLink>
        <NavLink to="/MirrorSetting" className='router' onClick={closeDrawer}
        activeClassName='active-router'>
          <ListItem
            button
            key={'ContactUs'}
          >
            <ListItemIcon><LaptopWindowsRounded/></ListItemIcon>
            <ListItemText primary={'스마트 미러 관리'} disableTypography />
          </ListItem>
        </NavLink>
        <NavLink to="/HabitSetting" className='router' onClick={closeDrawer}
        activeClassName='active-router'>
          <ListItem
            button
            key={'HabitSetting'}
          >
            <ListItemIcon><FaceRounded/></ListItemIcon>
            <ListItemText primary={'습관 관리'} disableTypography />
          </ListItem>
        </NavLink>
          </Fragment>
        
        </List>
      </>
    );
  };


  const mapStateToProps= (state) =>{
  
    return {
      state: state
    }
  }
  export default connect(
    mapStateToProps
  )(DrawerListGroup);