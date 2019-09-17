import React from 'react';


function Message(props) {
  console.log(props.chatEvent.type)
  if (props.chatEvent.type === 'message') {
    return (
      <div className='participant'>
       <ul className='Chats'>
        <li><img src={props.chatEvent.avatar} alt={props.chatEvent.name}></img>
          <p>{props.chatEvent.timestamp}</p>
          <p>{props.chatEvent.participantName}</p>
          <p>{props.chatEvent.message}</p>
        </li>
      </ul>
      </div>
    )
  }
  else{
    return (
      <p>{props.chatEvent.participantName} {props.chatEvent.type}</p>
    );
  }
}


export default Message; 