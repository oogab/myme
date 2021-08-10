import styled from 'styled-components';
const Wrapper = styled.div`
    hr{
        border: white 1px solid;
        margin-bottom: 20px;
    }
    .daily-menu{
        width:auto;
    }
    .daily-menu > * {
        display: inline-block;
    }
    .MuiContainer-root {
        margin-bottom: 10px;
    }
    .habits{
        max-width: calc(90%/4);
        margin: 1.25%;
    }
`;
export default Wrapper;