import React  from 'react';
import PropTypes from 'prop-types';
import s from './FilmDetails.module.css';

const FilmDetails = ({filmDetailName, filmDetailValue}) => {
    return <div className={s.stat}>
        <h4 >{filmDetailName}</h4>
        <p>{filmDetailValue}</p>
    </div>;
};


FilmDetails.defaultProps = {
    filmDetailName: 'Film Name',
    filmDetailValue: 'About film',
};

FilmDetails.propTypes = {
    filmDetailName: PropTypes.string,
    filmDetailValue: PropTypes.string,
};


export default FilmDetails;