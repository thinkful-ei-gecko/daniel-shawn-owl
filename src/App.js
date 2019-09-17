import React from 'react';
import ParticipantsList from './ParticipantsList';
import Stage from './Stage.js'
import Chat from './Chat'
import './Stage.css'

function chatToggle(){
    let participants = document.getElementsByClassName("ParticipantView")
    console.log(participants)
    let chat = document.getElementsByClassName("Chats")
    console.log(chat)
    participants[0].style.display="none";
    chat[0].style.display="block;"
}

function participantToggle() {
    let participants = document.getElementsByClassName("ParticipantView")
    console.log(participants)
    let chat = document.getElementsByClassName("Chats")
    participants[0].style.display="block";
    chat[0].style.display="none;"
}

function App(props) {

    return(
    <main className="App">
        <header className="App-header">
            <h1>OWL</h1>
        </header>
        <div className="Owl-app">
            <button onClick={()=>chatToggle()} className="chat-toggle">Chat</button>
            <button onClick={()=> participantToggle()} className="Participant-toggle">Participants</button>
            <div className="ParticipantView">
                <ParticipantsList Participants={props.Participants}></ParticipantsList>
            </div>
                <div className="Chats">
                    <Chat ChatEvents={props.ChatEvents} Participants={props.Participants}></Chat>
                </div>
        </div> 
        <div className="stage">
            <Stage Participants={props.Participants}></Stage>
        </div>
       

    </main>);
}

export default App;
