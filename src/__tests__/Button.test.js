import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Result from '../Button';
import App from '../Button';
import Button from '../Button'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders Result with correct value', () => {
  const wrapper = shallow(<Result counter="1"/>)
  const result = <div>1</div>
  expect(wrapper).toContainReact(result)
});

it('renders Button with correct value', () => {
  const wrapper = shallow(<Button incrementValue="1"/>)
  console.log("Contains: " + wrapper.debug())
  const result = <div>1</div>
  expect(wrapper).toContainReact(result)
});
