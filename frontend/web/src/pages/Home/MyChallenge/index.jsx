import React, { useState } from 'react'
import { Box, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { categories } from '../../../config/config';
import { useSelector } from 'react-redux';
import ChallengeItem from '../../../components/Home/ChallengeItem/index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MyChallengeHome = () => {
  const { myChallenges } = useSelector((state) => state.challenge)
  const [value, setValue] = React.useState(0);

  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }

  const workoutChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 1)
  const studyChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 2)
  const lifeChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 3)
  const mealChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 4)
  const abilityChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 5)
  const hobbyChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 6)
  const assetChallengs = myChallenges.filter((challenge) => challenge.Challenge.Categories[0].id === 7)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Paper style={{ marginTop: '5px' }} >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
        >
          {
            categories.map((subject, i) => {
              return <Tab key={subject.name} label={subject.label} {...a11yProps(i)}/>
            })
          }
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        {
          workoutChallengs ?
          (
            workoutChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          studyChallengs ?
          (
            studyChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          lifeChallengs ?
          (
            lifeChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={3}>
      {
          mealChallengs ?
          (
            mealChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={4}>
        {
          abilityChallengs ?
          (
            abilityChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={5}>
        {
          hobbyChallengs ?
          (
            hobbyChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
      <TabPanel value={value} index={6}>
        {
          assetChallengs ?
          (
            assetChallengs.map((challenge) => {
              return (
                <Grid key={challenge.id} item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <ChallengeItem challenge={challenge} />
                </Grid>
              )
            })
          )
          : null
        }
      </TabPanel>
    </>
  )
}

export default MyChallengeHome