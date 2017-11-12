import React from 'react';
import './css/ProgressBar.css'

const ProgressBar = (props) => {

const {orientation, percentage} = props

const style = (orientation === "vertical") ?
              {height: percentage, ...props.style} :
              {width: percentage, ...props.style}

return (
    <div>
      <div className={"progressBar " + orientation}></div>
      <div className={"progressBar-progress " + orientation} style={style}></div>
    </div>
    )
}

export default ProgressBar
