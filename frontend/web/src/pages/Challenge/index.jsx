import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { 
    AppBar, 
    Tabs, 
    Tab, 
    Typography, 
    Box, 
    Divider, 
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
        } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Axios from 'axios';

import { CommonContext } from '../../context/CommonContext';
import { ViewContext } from '../../context/ViewContext';

import ButtonBases from '../../components/Main/ButtonBases';
import VoteGridList from '../../components/Grid/VoteGridList';
import VoteGridTitle from '../../components/Grid/VoteGridTitle';

const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
    media: {
      height: 140,
    },
  });

const Challenge = ()=>{
    const classes = useStyles();
    return(
        <Layout>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/run.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            새벽러닝
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            해가 뜨지 않은 새벽,<br/>
            시원하게 달려봅시다.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <PersonIcon/>11
          <br/>        
        <FavoriteIcon/>16
      </CardActions>
    </Card>
        </Layout>
    )
};

export default Challenge;