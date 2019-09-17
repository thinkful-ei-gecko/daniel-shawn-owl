import React from 'react'
import ReactDOM from 'react-dom'
import Staged from './Staged'
import renderer from 'react-test-renderer'


it('Renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Staged />, div);
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Staged />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});