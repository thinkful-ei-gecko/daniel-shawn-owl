import React from 'react';
import Message from './Message';



function Chat(props) {
  //Participants & ChatEvents unified so each chat even has all information required to be rendered as message
  const updatedChatEvents = props.ChatEvents.map(chatEvent => {
    const participant = props.Participants.find(p => chatEvent.participantId === p.id);
    chatEvent.participantName = participant.name;
    chatEvent.avatar = participant.avatar;
    chatEvent.time = new Date(chatEvent.timestamp)
    chatEvent.displayMinutes = chatEvent.time.getMinutes()
    chatEvent.displayHours = chatEvent.time.getHours();
    return chatEvent;
  });

    console.log(updatedChatEvents)

  //map touple: chatEvent = element, i = index 
  //we use the index as the key so React doesn't throw a warning
  //not best practice as an ID will always be unique, indexes are only unique until you rerender or reorder, then things can break.
  return( 
    <div className="ChatWindow">
      <ul className='chats'>
      {updatedChatEvents.map((chatEvent, i) => (
      <Message key={i} chatEvent={chatEvent}/>
  ))}
  </ul>
  </div>)
}

export default Chat;