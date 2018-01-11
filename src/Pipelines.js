/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
import './css/Pipelines.css'
import Pipeline from "./Pipeline";
import PipelineHeadings from "./PipelineHeadings"
import Header from "./Header"


const Pipelines = (props) => {

    return (
        <div>
            <Header />
                &nbsp;
            <h1 className="margin-1-l">Pipelines</h1>
            <div className="container margin-1-l pad-1-t dls-accent-gray-01-bg">
                <PipelineHeadings />
                <Pipeline suffix="SL" stages='1'/>
                <Pipeline suffix="HF"stages='2'/>
                <Pipeline suffix="HL"/>
            </div>

        </div>
    )
}

Pipelines.defaultProps = {
    dummy: 1
};

export default Pipelines