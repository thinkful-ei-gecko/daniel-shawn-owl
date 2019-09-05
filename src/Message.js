import React from 'react';


function Message(props) {
  if (props.chatEvent.type === 'message') {
    return (
      <div className='participant'>
       <ul className='Chats'>
        <li><img src={props.chatEvent.avatar} alt={props.chatEvent.name}></img></li>
      </ul>
      </div>
    )
  }
  else{
    return null;
  }
}


export default Message; 