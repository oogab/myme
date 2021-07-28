import React from 'react';
import Wrapper from './styles'
function App(props){
    return(
        <Wrapper onClick={props.onClick}>
            <h2 className="title">{props.routineId}</h2>
        </Wrapper>
    );
}
export default App;