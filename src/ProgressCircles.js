/**
 * Created by pjsmith on 06/11/2017.
 */
import React from 'react';
//import {Line, Circle} from 'react-percentage-circle'
import CircularProgressbar from 'react-circular-progressbar';
import './css/ProgressCircles.css'

export const ProgressCircle1 = (props) => {
  return(
    <div>
      Progress Circle 1
  </div>
  )
}

const text = () => {
  return (
    "9400"
  )
}

export const ProgressCircle2 = (props) => {

  const style = { 'backgroundColor': '#344152'}

  return(
    <div className="container">
    <div className="row">
      <div className="col-xs-6 col-sm-4 col-md-2" style={style}>
        <CircularProgressbar percentage={65} textForPercentage={text} background="true"/>
      </div>
      </div>
    </div>
  )

}
