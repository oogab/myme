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


const Challenge = ()=>{
    ;
    return(
        <Layout>
            
        </Layout>
    )
};

export default Challenge;