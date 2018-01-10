/**
 * Created by pjsmith on 07/11/2017.
 */
import React from 'react';
import PropTypes from "prop-types";
//import './css/Pipelines.css'
import _ from 'lodash'
import Pipeline from "./Pipeline";


const Header = (props) => {

    return (
        <header className='dls-navbar row row-xs-center header-bar pad dls-color-primary-bg dls-accent-white-01'
                role="heading">
            <a className="navbar-brand" href="/">
                <img src="./img/logo.svg" alt="American Express" style={{width: '213px'}}/>
            </a>

            <span className="dls-name">Rogue IP Sprint</span>


        </header>
    )
}

Header.defaultProps = {

};

export default Header