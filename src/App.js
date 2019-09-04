import React from 'react';
import ChatEvents from './ChatEvents';
import ParticipantsList from './ParticipantsList';



function App(props) {
    return(<main className="App">
        <header className="App-header">
            <h1>OWL</h1>
        </header>
        <div className="Owl-app">
            <ParticipantsList Participants={props.Participants}></ParticipantsList>
        </div> 

    </main>);
}

export default App;
