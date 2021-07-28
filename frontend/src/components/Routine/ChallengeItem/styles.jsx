import styled from 'styled-components';
const Wrapper = styled.div`
    display: inline-block;
    border : 1px solid #66A091;
    padding : 15px;
    border-radius : 10px;
    min-width:220px;
    height:177px;
    margin-right:10px;
    background-color:white;
    .title {
        margin-top:0px;
    }
    .float-right {
        float:right;
    }
    .MuiLinearProgress-root{
        height: 10px;
        background-color: #B5E3D8;
        margin-top:5px;
    }
    .MuiLinearProgress-barColorPrimary{
        background-color:#776D61;
    }
`;
export default Wrapper;