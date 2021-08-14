import React, { useCallback, useEffect, useState } from 'react';
import { Grid, IconButton, InputBase, makeStyles, Paper, Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Wrapper from './styles';

import Layout from '../../../layout/index';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_CHALLENGE_REQUEST } from '../../../reducers/challenge';
import CardList from '../../../components/Challenge/CardList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchChallenge = () => {
  const dispatch = useDispatch()
  const { searchChallenges } = useSelector((state) => state.challenge)

  const [searchWord, setSerachWord] = useState('')
  const onChangeSearchWord = useCallback((e) => {
    setSerachWord(e.target.value)
  }, [])

  const classes = useStyles();

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    dispatch({
      type: SEARCH_CHALLENGE_REQUEST,
      data: searchWord
    })
  }, [searchWord])

  // useEffect(() => {
  //   console.log(searchWord)
  // }, [searchWord])

  return (
    <Wrapper>
      <Layout>
        <Grid container className="grid" >
          <Grid item xs={12} >
            <Typography variant="h6" style={{ marginBottom: 10 }}>챌린지 검색</Typography>
          </Grid>
          <Grid item xs={12} >
            <Paper component="form" className={classes.root} onSubmit={onSubmit} >
              <InputBase
                className={classes.input}
                placeholder="챌린지 검색"
                value={searchWord}
                onChange={onChangeSearchWord}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} ><hr/></Grid>
          <Grid item xs={12} className="CardContent">
            <CardList challenges={searchChallenges} />
          </Grid>
        </Grid>
      </Layout>
    </Wrapper>
  );
}

export default SearchChallenge;