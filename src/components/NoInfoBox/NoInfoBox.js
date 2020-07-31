import React from 'react';
import PropTypes from 'prop-types';
import s from './NoInfoBox.module.css';

const NoInfoBox = ({text}) => {
    return <div className={s.noInfoBox}>{`No info about ${text}`}</div>
};


NoInfoBox.defaultProps = {
    text: 'it',
};

NoInfoBox.propTypes = {
    text: PropTypes.string,
};


export default NoInfoBox;