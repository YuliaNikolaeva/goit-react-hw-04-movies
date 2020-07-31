import React from 'react';
import PropTypes from 'prop-types';
import s from './Error.module.css';


const Error = ({text}) => {
    return <div className={s.errorMassage}>{`Sorry, ${text}`}</div>
};


Error.defaultProps = {
    text: 'we have trouble in this page',
};

Error.propTypes = {
    text: PropTypes.string,
};


export default Error;