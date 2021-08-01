import React from 'react';
import CreateChallengeForm from '../../components/CreateChallenge/CreateForm/';
import {Grid} from '@material-ui/core'
const CreateChallenge = () => {

    return (
     
         
         <Grid container item xs={12}>
             <CreateChallengeForm></CreateChallengeForm>
          </Grid>
          
        
    );
}

export default CreateChallenge;