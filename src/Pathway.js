/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
import './css/Pathway.css'


const xPos = (position, props) => {
  let xPos = position * props.gap
  //console.log("xPos: " + xPos)
  return (xPos)
}

const viewBoxSize = (props) => {
  return ("0 0 " + (props.offset + ((props.steps.length - 1) * props.gap) + props.padding) + " " + props.height)
}

const Steps = (steps, props) => steps.map((step, i) => (


    <circle className={(step === props.selected) ? 'Pathway-selected' : 'Pathway-circle'} key={i} cx={props.offset + xPos(i, props)} cy={2} r={props.radius}/>
))

const Title = (steps, props) => steps.map((step, i) => (
  (!props.hideUnselectedText || step === props.selected) ?
    <text key={i} className={(step === props.selected) ? 'Pathway-selected' : 'Pathway-text'}
                  x={props.offset + xPos(i, props)} y={5}>{step}</text> : ""
))


const Line = (steps, props) => {
  let x1 = props.offset
  let y1 = 2
  let x2 = props.offset + ((props.steps.length - 1) * props.gap)
  let y2 = 2

  return (
    <line className="Pathway-line" x1={x1} y1={y1} x2={x2} y2={y2}/>

  )
}

const Pathway = (props) => {
  const {steps} = props

  return (
    <div>
      <svg className="Pathway" viewBox={viewBoxSize(props)}>
        {Line(steps, props)}
        {Steps(steps, props)}
        {Title(steps, props)}
      </svg>
    </div>
  )
}


Pathway.defaultProps = {
  steps: ['1', '2', '3', '4', '5'],
  offset: 3,
  padding: 3,
  radius: 1,
  gap: 12,
  height: 6,
  selected: '',
  hideUnselectedText: false
};

Pathway.propTypes = {
  steps: PropTypes.array.isRequired,
  radius: PropTypes.number.isRequired
};



export default Pathway

