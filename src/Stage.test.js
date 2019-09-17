import React from 'react'
import ReactDOM from 'react-dom'
import Stage from './Stage'
import renderer from 'react-test-renderer'
import Participants from './Participants'


it('Renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Stage Participants = {Participants} />, div);
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Stage Participants = {Participants} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});