import React from 'react';
import PropTypes from 'prop-types';
import s from './CastItem.module.css';
import defaultCastPhoto from './defaultPhoto.jpg';

import {imageBaseUrl} from '../../services/filmsApi';

const CastItem = ({castItem}) => {
    const photo = castItem.profile_path
    ? `${imageBaseUrl}${castItem.profile_path}`
    : defaultCastPhoto;

    return <li 
    key={castItem.id}
    className={s.castItem}
    >
        <img 
        src={photo}
        alt={castItem.name}
        className={s.photoCast}
        ></img>
        <p>{castItem.name}</p>
    </li>;
};


CastItem.propTypes = {
    castItem: PropTypes.shape({
        profile_path: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
    }).isRequired,
};


export default CastItem;