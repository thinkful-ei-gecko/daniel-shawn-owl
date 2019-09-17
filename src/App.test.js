import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'
import Participants from './Participants'
import ChatEvents from './ChatEvents'


it('Renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<App Participants = {Participants} ChatEvents = {ChatEvents}/>, div);
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<App Participants = {Participants} ChatEvents = {ChatEvents} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});