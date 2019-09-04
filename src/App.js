import React from 'react';
import ParticipantsList from './ParticipantsList';
import Stage from './Stage.js'
import Chat from './Chat'
import ChatEvents from './ChatEvents'


function App(props) {
    return(<main className="App">
        <header className="App-header">
            <h1>OWL</h1>
        </header>
        <div className="Owl-app">
            <ParticipantsList Participants={props.Participants}></ParticipantsList>
        </div> 
        <div className="Stage">
            <Stage Participants={props.Participants}></Stage>
        </div>
        <div className="Chat">
            <Chat ChatEvents={props.ChatEvents} Participants={props.Participants}></Chat>
        </div>

    </main>);
}

export default App;
