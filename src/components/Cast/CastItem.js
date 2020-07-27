import React from 'react';
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
        className={s.photo}
        ></img>
        <p>{castItem.name}</p>
    </li>
};


export default CastItem;