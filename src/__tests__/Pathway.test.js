import React from 'react';
import ReactDOM from 'react-dom';
import Pathway from '../Pathway';

it('Basic Render - No props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pathway />, div);
});

it('Min props to cover remaining code', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pathway steps={['First', 'Second', 'Third']} selected="First" hideUnselectedText={true}/>, div);
});

