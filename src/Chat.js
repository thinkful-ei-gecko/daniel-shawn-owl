import React from 'react';
import Message from './Message';


function Chat(props) {
  const messages = props.ChatEvents.map(message => {
    const participant = props.Participants.find(p => message.participantId === p.id);
    message.participantName = participant.name;
    message.avatar = participant.avatar;
    return message;
  });

  messages.forEach(message => {
    message.time = new Date(message.timestamp)
    message.displayMinutes = message.time.getMinutes()
    message.displayHours = message.time.getHours();
  });

  return( <div className="ParticipantList">
  {messages.map(message => (
      <Message
      key={message.id} 
      name={message.name}
      avatar={message.avatar}
      />
  ))}
  </div>)
}

export default Chat;