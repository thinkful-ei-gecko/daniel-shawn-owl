import React from 'react';
import Participant from './Participant.js';


function ParticipantsList(props) {
    const order = props.Participants.sort((b, a) => a.inSession - b.inSession);
    order.forEach(person => {
        if (person.inSession === true) {
            person.inSession = 'in session'
        } else {
            person.inSession = `${person.name} left`
        }
    })



    return( <div className="ParticipantList">
        {order.map(person => (
            <Participant
            key={person.id} 
            name={person.name}
            avatar={person.avatar}
            onStage={person.onStage}
            inSession={person.inSession}
            />
        ))}
        </div>)

}

export default ParticipantsList;