import React from 'react';

function Staged(props) {
  return (
    <div className="stageIcon">
      <img src={props.avatar} alt={props.name}></img>
      <div className="StageName">
        <p>{props.name}</p>
      </div>
    </div>
  ) 
}

export default Staged;