import React from 'react';
import {mount, shallow} from 'enzyme';
import Parent from '../Problem';

test('handles Click event', () => {
  const wrapper = mount(<Parent />)
  expect(wrapper.state().counter).toEqual(0)
  wrapper.find('button')
         .simulate('click')
         .then(
           expect(wrapper.state().counter).toEqual(1)
         )

  console.log(wrapper.state().counter)
});

test('calls Async Click event', () => {
  const wrapper = mount(<Parent />)
  wrapper.instance().onClickAsync()
});


