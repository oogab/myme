import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles'

export const Wrapper = styled.div`
    hr{
        border: white 1px solid;
        margin-bottom: 20px;
    }
    .menu-text{
        font-size: 1.5em;
        font-weight: bold;
    }
    .active-tab{
        color:#B49173;
    }

    .tab{
        margin-bottom:10px;
    }
`;

export const useStyles = makeStyles((theme)=>({
    indicator:{
        backgroundColor:'#B49173',
    },
}))