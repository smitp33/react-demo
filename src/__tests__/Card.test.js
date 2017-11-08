import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../Card';

it('handles CardList entry', () => {
  const wrapper = mount(<App />)
  const cards = [{id: 1,
    avatar_url: 'https://avatars3.githubusercontent.com/u/12224823?v=4',
    name: 'smitp33',
    company: 'home'}]
  wrapper.setState({ cards: cards})

});

it('handles Form entry', () => {

  const wrapper = mount(<App />)
  expect(wrapper.state().cards.length).toEqual(0);
  const form = wrapper.find('form').at(0);
  const input = wrapper.find('input').at(0);
  input.simulate('change', { target: { value: 'smitp33' } });
  form.simulate('submit');
  console.log(wrapper.state().cards.length)
});


it('function addNewCard', () => {
  const wrapper = mount(<App />)
  const card = {id: 1,
                  avatar_url: 'https://avatars3.githubusercontent.com/u/12224823?v=4',
                  name: 'smitp33',
                  company: 'home'}
  wrapper.instance().addNewCard(card)

});
