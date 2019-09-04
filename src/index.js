import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants.js';
import ChatEvents from './ChatEvents.js';
import App from './App.js';

ReactDOM.render(<App Participants={Participants} ChatEvents={ChatEvents} />, document.getElementById('root'));



