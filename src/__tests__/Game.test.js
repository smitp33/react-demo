import React from 'react';
import ReactDOM from 'react-dom';
import App, {Game, Button} from '../Game';
import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button answerIsCorrect={true} />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button answerIsCorrect={false} />, div);
});

it('handles state changes', () => {
  const wrapper = mount(<Game />)
  wrapper.setState({ usedNumbers: [1] });
  wrapper.setState({ selectedNumbers: [2,3] });
  wrapper.setState({ doneStatus: true });
  
});


it('function updateDoneStatus', () => {
  const wrapper = mount(<Game />)
  wrapper.setState({ usedNumbers: [1,2,3,4,5,6,7,8,9] });
  wrapper.instance().updateDoneStatus()
  wrapper.setState({ usedNumbers: [2,3,4,5,6,7,8,9],
                      redraws: 0,
                      numberOfStars: 2,
  });
  wrapper.instance().updateDoneStatus()
  wrapper.setState({
    usedNumbers: [2, 3, 4, 5, 6, 7, 8, 9],
    redraws: 0,
    numberOfStars: 1,
  });
  wrapper.instance().updateDoneStatus()
  wrapper.setState({
    usedNumbers: [1,2,3,4],
    redraws: 0,
    numberOfStars: 3,
  });
  wrapper.instance().updateDoneStatus()


});

it('function resetGame', () => {
  const wrapper = mount(<Game />)
  wrapper.instance().resetGame()
});

it('function selectNumber', () => {
  const wrapper = mount(<Game />)
  wrapper.instance().selectNumber(1)
  wrapper.setState({ usedNumbers: [1] });
  wrapper.instance().selectNumber(1)
});

it('function unselectNumber', () => {
  const wrapper = mount(<Game />)
  wrapper.setState({ selectedNumbers: [1] });
  wrapper.instance().unselectNumber(1)
});


it('function checkAnswer', () => {
  const wrapper = mount(<Game />)
  wrapper.setState({ selectedNumbers: [1,2,3], numberOfStars: 6  });
  wrapper.instance().checkAnswer()
});

it('function acceptAnswer', () => {
  const wrapper = mount(<Game />)
  wrapper.instance().acceptAnswer()
});

it('function redraw', () => {
  const wrapper = mount(<Game />)
  wrapper.instance().redraw()
  wrapper.setState({ redraws: 0 });
  wrapper.instance().redraw()
});

it('handles Answer click', () => {
  const wrapper = mount(<Game />)
  wrapper.setState({ selectedNumbers: [1] });
  const Answer = wrapper.find('Answer').at(0);
  const span = Answer.find('span').at(0);
  span.simulate('click');
  //expect(wrapper.state().counter).toEqual(1);
});

it('handles Numbers click', () => {
  const wrapper = mount(<Game />)
  const Numbers = wrapper.find('Numbers').at(0);
  const span = Numbers.find('span').at(0);
  span.simulate('click');
  //expect(wrapper.state().counter).toEqual(1);
});



