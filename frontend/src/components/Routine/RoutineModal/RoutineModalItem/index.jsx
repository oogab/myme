import React from 'react';
import Wrapper from './styles'

function App(props){
    return(
        <Wrapper>
            <span className="toDoItem">하루 10분 명상</span><span className="minus">➖</span>
        </Wrapper>
    );
}
export default App;