import React from 'react';
import Wrapper from './styles'

function App(props){
    return(
        <Wrapper>
            <span className={props.clicked?'float-left not-selected':'float-left'}>{props.dayName}요일</span>
            <div className='float-right'>
<<<<<<< HEAD
            <span><input type='time' className='time-input' defaultValue={props.timeInfo} readOnly={props.clicked} onChange={(e)=>props.change(e, props.idx)}></input></span>
=======
            <span><input type='time' className='time-input' value={props.timeInfo.hour+':'+props.timeInfo.min}></input></span>
>>>>>>> 6856e7cc1b7367bcf4168499048c46e94d453b23
            </div>
        </Wrapper>
    );
}
export default App;