import React from 'react';
import ReactDOM from 'react-dom';
import DemoComponents from '../DemoComponents';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoComponents />, div);
});
