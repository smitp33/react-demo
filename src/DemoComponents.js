import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './css/ProgressCircles.css'
import Pathway from './Pathway'
import ProgressBar from './ProgressBar'


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

      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4" style={style}>

          <h4>Vertical Progress Bar</h4>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <ProgressBar orientation="vertical" percentage={60 + '%'} style={ {backgroundColor: 'pink'}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4">
            <h4>Horizontal Progress Bar</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4" style={style}>

          <ProgressBar orientation="horizontal" percentage={25 + '%'} />
&nbsp;
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4" style={style}>

          <ProgressBar orientation="horizontal" percentage={40 + '%'} style={ {backgroundColor: 'orange'}}/>
&nbsp;
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4" style={style}>
                  <ProgressBar orientation="horizontal" percentage={80 + '%'} style={ {backgroundColor: 'red'}}/>
                  &nbsp;
        </div>
      </div>
    </div>
  )

}

export default DemoComponents;
