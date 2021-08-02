import React from 'react';
import {Grid} from '@material-ui/core';
import Mirror from '../../components/MirrorSetting/';

const MirrorSetting = () => {

    return (
        <Grid container item xs={12} style={{background: '#eee'}}>
             <Mirror></Mirror>
        </Grid>                
    );
}

export default MirrorSetting;