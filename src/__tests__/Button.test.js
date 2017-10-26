import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Result from '../Button';

it('renders Result with correct value', () => {
  const wrapper = shallow(<Result counter="1"/>)
  const result = <div>1</div>
  expect(wrapper).toContainReact(result)
});
