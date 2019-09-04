import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants.js';
import Participant from './Participant.js';


function ParticipantsList(props) {
    return( <div className="ParticipantList">
        <Participant 
        name={props.Participants[0].name}
        avatar={props.Participants[0].avatar}
        onStage={props.Participants[0].onStage}>
        </Participant>
    </div>)
}

export default ParticipantsList;