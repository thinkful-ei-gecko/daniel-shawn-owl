import React from 'react';
import Staged from './Staged'


function Stage(props) {
  const onStage = props.Participants.filter(person => person.onStage === true);

  return (
    <div className="onStage">
      {onStage.map(person => (
        <Staged 
          key = {person.id}
          name={person.name}
          avatar={person.avatar}
          />
      ))}
    </div>
  )
}


export default Stage;