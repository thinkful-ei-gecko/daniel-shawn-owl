import React from 'react';

function Message(props) {
  console.log(props.chatEvent.type)
  if (props.chatEvent.type === 'message') {
    return (
        <li><img className="Avatar" src={props.chatEvent.avatar} alt={props.chatEvent.name}></img>
          <span>{props.chatEvent.participantName}</span>
          <span>{props.chatEvent.displayHours}:{props.chatEvent.displayMinutes}</span>
          <p>{props.chatEvent.message}</p>
        </li>
    )
  }
  else{
    return (
        <li>{props.chatEvent.participantName} {props.chatEvent.type}</li>
    );
  }
}


export default Message; 