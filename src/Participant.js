 import React from 'react';
import './Participant.css';


//participants
function Participant(props) {
    return( <div className="Participant">
        <div><img className="Avatar" src={props.avatar}></img></div>
        <ul className="NameOnStageGroup">
            <li className="Name">{props.name}</li>
            <li className="OnStage">
                <span>on stage - </span> 
                <a href="#">Boot</a> 
            </li>
            <li>{props.inSession}</li> 
        </ul>
     </div>)
}

export default Participant;