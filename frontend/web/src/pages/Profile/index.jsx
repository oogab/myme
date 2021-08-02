import React from 'react';
import {Grid} from '@material-ui/core';
import PersonalInformation from '../../components/Profile/';
const Profile = () => {

    return (
        <Grid container item xs={12} style={{background: '#eee'}}>
             <PersonalInformation></PersonalInformation>
        </Grid>                
    );
}

export default Profile;