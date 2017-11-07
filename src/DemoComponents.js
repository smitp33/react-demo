import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './css/ProgressCircles.css'
import Pathway from './Pathway'


const text = () => {
  return (
    "9400"
  )
}

const style = { 'backgroundColor': 'white'}

export const DemoComponents = (props) => {



  return(
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-2" style={style}>
          <br/>
          <h4>Progress Circle</h4>
          <CircularProgressbar percentage={65} textForPercentage={text} background="true"/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <br/>
          <h4>Pathway</h4>
          <Pathway/>
          <Pathway steps={['First', 'Second', 'Third']}/>
          <Pathway steps={['First', 'Second', 'Third']} selected="Second" gap={25}/>
          <Pathway steps={['First', 'Second', 'Third']} selected="First" hideUnselectedText={true} gap={25}/>
        </div>
      </div>
    </div>
  )

}

export default DemoComponents;
