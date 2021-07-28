import React from 'react';
import { Grid } from '@material-ui/core';
import Layout from '../../layout';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Wrapper from './styles';
import {
  Button,
  useMediaQuery,

  Divider,
  TextField,

} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



const AboutMe = () => {
  const classes = useStyles();
  return (
    // <Layout>
      <Wrapper>

        <Grid className="about-me">
          <h2>ABOUT ME</h2>
          <Grid className="picture"></Grid>
          <h3>Jeniffer LEE</h3>
          <Grid container justify="center" className="info">
            <Grid item className="phone">
              +82 10 0000 0000
            </Grid>
            <Grid item className="email">
              jeni_lee@gmail.com
            </Grid>
          </Grid>
          <h2>WHAT I DO</h2>
          <Grid container className="license">
            <Grid item xs={12} md={4}>
              <Grid className="license-img">
                <img src="/images/about_me_img_3.png" alt="license_img" />
              </Grid>
              <h2>MOBILE APPS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid className="license-img">
                <img src="/images/about_me_img_4.png" alt="license_img" />
              </Grid>
              <h2>WEB DESIGN</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid className="license-img">
                <img src="/images/about_me_img_5.png" alt="license_img" />
              </Grid>
              <h2>UXUI DESIGN</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    // </Layout>
  );
};

export default AboutMe;
