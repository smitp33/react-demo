/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
import './css/Pipeline.css'
import _ from 'lodash'
import C from './constants';


const getStageName = (name) => (
    _.get(C, ['PIPELINE_STAGE_NAMES', name ,'value'], 'NOT_FOUND')
)

const Stages = (props) => {

    let rowData = []
    for (let i = 0; i < props.stages; i++) {
        i === 0 ? rowData.push(<div className="col-md-1 margin-3-t">{props.suffix}</div>) : ""
        rowData.push(<div class="col-md-2 col-sm-2 flex">
            <div className="card height-auto fluid flex flex-column card-rounded card-actionable card-block">
                <div className="card-actionable-icon flex card-flex-row">
                    <div className="icon-container pad-responsive-r">
                        <span className="icon icon-lg dls-accent-blue-02 fab fa-2x fa-docker"></span>
                    </div>
                    <div>
                        <h2 className="heading-3 margin-1-b dls-accent-blue-02">
                            {getStageName(props.suffix + "_" + i)}
                        </h2>
                        {/*<p className="body-1 margin-0-b">*/}
                            {/*This is body copy. We recommend keeping this copy to a four line maximum.*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
        </div>)
        i !== (props.stages -1) ? rowData.push(<div className="col-md-0 margin-3-t fa fa-arrow-right" />) : ""
    }


    return (
        rowData
    )
}

const Pipeline = (props) => {

    return (

            <div className="row pad-responsive-lrXXX pad-responsive-txxx stack-responsive-a">

                {Stages(props)}
            </div>


    )
}

Pipeline.defaultProps = {
    stages: 3,
    headings: ['E1','E2','E3']
};

export default Pipeline