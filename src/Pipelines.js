/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
import './css/Pipelines.css'
import _ from 'lodash'
import Pipeline from "./Pipeline";
import Pathway from "./Pathway";
import Header from "./Header"


const Pipelines = (props) => {

    return (
        <div>
                <Header />
                &nbsp;
            <h1 className="margin-1-l">Pipelines</h1>
            <div className="container margin-1-l pad-1-t dls-accent-gray-01-bg">
                <Pipeline stages='1'/>
                <Pipeline stages='2'/>
                <Pipeline />
            </div>

        </div>
    )
}

Pipelines.defaultProps = {
    stages: 3
};

export default Pipelines