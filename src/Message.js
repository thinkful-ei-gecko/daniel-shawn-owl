import React from 'react';


function Message(props) {
  if (props.ChatEvents.type === 'message') {
    return (
      <div className='participant'>
       <ul className='Chats'>
        <li><img src={props.avatar} alt={props.name}></img></li>
      </ul>
      </div>
    )
  }
}


export default Message; 