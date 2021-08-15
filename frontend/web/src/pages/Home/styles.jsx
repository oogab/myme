import styled from 'styled-components';
const Wrapper = styled.div`
    hr{
        border: white 1px solid;
        margin-bottom: 20px;
    }
    .menu-text{
        font-size: 1.5em;
        font-weight: bold;
    }
    .daily-menu{
        width:auto;
        margin-bottom: 10px;
    }
    .daily-menu > * {
        display: inline-block;
    }
    .MuiContainer-root {
       
    }
    .btn{
        background-color:#B5E3D8;
    border-radius: 30px;
    width:100px;
    text-align:center;
    
    margin-left: 20px;
    border: none;
    font-weight: bold;
    }
`;
export default Wrapper;