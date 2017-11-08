import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../Button';
import {Result, Button} from '../Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders Result with correct value', () => {
  const wrapper = shallow(<Result counter="1"/>)
  const result = '<div>1</div>'
  expect(wrapper).toHaveHTML(result)
});


it('renders Button with correct value', () => {
  const wrapper = shallow(<Button incrementValue="1"/>)
  const result = '<button>+1</button>'
  expect(wrapper).toHaveHTML(result)
});

it('handles Button click', () => {
  const wrapper = mount(<App />)
  expect(wrapper.state().counter).toEqual(0);
  const firstButton = wrapper.find('button').at(0);
  firstButton.simulate('click');
  expect(wrapper.state().counter).toEqual(1);
});


