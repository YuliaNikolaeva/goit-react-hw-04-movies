import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonBack.module.css'

const ButtonBack = ({goBack}) => {
    return <button 
        type="button"
        className={s.btnBack}
        onClick={goBack}
     >Go back</button>
};


ButtonBack.defaultProps = {
    goBack: "#",
};

ButtonBack.propTypes = {
    goBack: PropTypes.func,
};


export default ButtonBack;