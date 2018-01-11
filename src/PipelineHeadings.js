/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
import './css/PipelineHeadings.css'
import _ from 'lodash'
import C from './constants';


const PipelineHeadings = (props) => {

    let headingData = []
    for (let i = 0; i < props.headings.length; i++) {
        i === 0 ? headingData.push(<div className="col-md-1 margin-3-t"></div>) : ""
        headingData.push(<div class="col-md-2 col-sm-2 flex">
                        {props.headings[i]}
                    </div>)
        //i !== (props.headings.length -1) ? headingData.push(<div className="col-md-0 margin-3-t fa fa-arrow-right" />) : <div>P</div>
    }

    return (

            <div className="row">
                {headingData}
            </div>


    )
}

PipelineHeadings.defaultProps = {
    headings: ['E1','E2','E3']
};

export default PipelineHeadings