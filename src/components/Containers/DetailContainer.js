import React from 'react';
import PropTypes from 'prop-types';
import s from './DetailContainer.module.css';

const DetailContainer = ({head, children}) => {
    return <div className={s.detailContainer}>
        <h2>{head}</h2>
        {children}
    </div>
};


DetailContainer.defaultProps = {
    head: 'Head name',
};

DetailContainer.propTypes = {
    head: PropTypes.string,
};


export default DetailContainer;